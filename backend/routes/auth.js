const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* =======================
   REGISTER
======================= */
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("REGISTER EMAIL:", email);
    console.log("REGISTER PASSWORD (plain):", password);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ USER ALREADY EXISTS");
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role: "USER",
    });

    console.log("✅ USER CREATED:", user.email);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

/* =======================
   LOGIN (DEBUG MODE)
======================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN EMAIL:", email);
    console.log("LOGIN PASSWORD (plain):", password);

    const user = await User.findOne({ email });
    console.log("USER FROM DB:", user);

    if (!user) {
      console.log("❌ USER NOT FOUND");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      console.log("❌ PASSWORD INCORRECT");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secret123", // 🔒 fixed secret
      { expiresIn: "1h" }
    );

    console.log("✅ LOGIN SUCCESSFUL, TOKEN GENERATED");

    res.json({ token });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;


