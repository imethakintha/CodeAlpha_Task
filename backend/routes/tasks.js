// backend/routes/tasks.js
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single task
router.get("/:id", getTask, (req, res) => {
  res.json(res.task);
});

// CREATE a task
router.post("/", async (req, res) => {
  const { title, description, priority, dueDate } = req.body;

  const task = new Task({
    title,
    description,
    priority,
    dueDate,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a task
router.put("/:id", getTask, async (req, res) => {
  const { title, description, isCompleted, priority, dueDate } = req.body;

  if (title !== undefined) res.task.title = title;
  if (description !== undefined) res.task.description = description;
  if (isCompleted !== undefined) res.task.isCompleted = isCompleted;
  if (priority !== undefined) res.task.priority = priority;
  if (dueDate !== undefined) res.task.dueDate = dueDate;

  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a task
router.delete("/:id", getTask, async (req, res) => {
  try {
    await res.task.remove();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get task by ID
async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.task = task;
  next();
}

module.exports = router;
