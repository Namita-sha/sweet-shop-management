const mongoose = require("mongoose");
const app = require("./app");

const MONGO_URI = "mongodb+srv://Namita_321:Namita_321@cluster0.agn5sfg.mongodb.net/sweetshopDB";


mongoose
  .connect(MONGO_URI)

  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });