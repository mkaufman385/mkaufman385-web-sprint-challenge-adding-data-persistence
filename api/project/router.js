const router = require("express").Router();
const Project = require("./model");
const db = require("../../data/dbConfig");

router.get("/", (req, res, next) => {
  Project.getAll()

    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", async (req, res) => {
  try {
    const { project_name, project_description, project_completed } = req.body;

    // Checking if project_name is provided
    if (!project_name) {
      return res.status(400).json({ message: "Project name is required." });
    }

    // Inserting new project into the database
    const [project_id] = await db("projects").insert({
      project_name,
      project_description,
      project_completed: project_completed ? 1 : 0, // Converting boolean to integer
    });

    // Fetching the newly created project
    const project = await db("projects").where({ project_id }).first();

    // Converting project_completed to boolean
    project.project_completed = !!project.project_completed;

    // Responding with the newly created project
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from PROJECT router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
