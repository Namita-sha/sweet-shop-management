const express = require("express");
const Sweet = require("../models/Sweet");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all sweets
router.get("/", auth, async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// Add sweet (admin or normal for now)
router.post("/", auth, async (req, res) => {
  const sweet = await Sweet.create(req.body);
  res.status(201).json(sweet);
});

// Purchase sweet
router.post("/:id/purchase", auth, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);

  if (!sweet || sweet.quantity <= 0) {
    return res.status(400).json({ error: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json(sweet);
});

// Delete sweet
router.delete("/:id", auth, async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
});

module.exports = router;
