const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// API
app.post("/api/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User saved", data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));