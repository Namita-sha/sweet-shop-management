const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/sweets", require("./routes/sweets"));

app.get("/", (req, res) => {
  res.send("Sweet Shop API Running");
});

module.exports = app;

