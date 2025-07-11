const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    console.log("Incoming data:", req.body);

    if (!title || title.trim() === '') {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = new Task({ title });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (err) {
    console.error("Error saving task:", err);
    res.status(500).json({ error: "Failed to save task" });
  }
});

module.exports = router;
