const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require("../middleware/auth");

// ✅ Apply auth middleware to all routes before defining them
router.use(auth);

// Create a new task
router.post("/", async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = new Task({
      title,
      userId: req.userId, // 👈 Comes from decoded JWT
    });
    const saved = await newTask.save();
    res.json(saved);
  } catch (err) {
    console.error("Error saving task:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all tasks for the logged-in user
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;