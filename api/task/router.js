const router = require("express").Router();
const Task = require("./model");
const db = require("../../data/dbConfig");

router.get("/", (req, res, next) => {
  Task.getAll()

    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", async (req, res) => {
  try {
    const { task_description, task_notes, task_completed, project_id } =
      req.body;

    // Checking if task_description and project_id are provided
    if (!task_description) {
      return res.status(400).json({ message: "Task description is required." });
    }
    if (!project_id) {
      return res.status(400).json({ message: "Project ID is required." });
    }

    // Inserting new task into the database
    const [task_id] = await db("tasks").insert({
      task_description,
      task_notes,
      task_completed: task_completed ? 1 : 0, // Convert boolean to integer
      project_id,
    });

    // Fetching the newly created task
    const task = await db("tasks").where({ task_id }).first();

    // Converting task_completed to boolean
    task.task_completed = !!task.task_completed;

    // Responding with the newly created task
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from TASK router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
