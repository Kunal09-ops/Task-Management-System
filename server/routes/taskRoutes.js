// server/routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a new task
router.post('/', auth, async (req, res) => {
    const { title, description, priority, deadline } = req.body;
    try {
        const newTask = new Task({ title, description, priority, deadline });
        await newTask.save();
        res.json(newTask);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
