const express = require("express");
const router = express.Router();

let tasks = [
  { _id: 1, title: "Sample Task", completed: false },
  { _id: 2, title: "Frontend Backend Integration", completed: false }
];

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

module.exports = router;
