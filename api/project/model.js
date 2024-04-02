const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    "project_completed"
  );

  return projects.map((project) => ({
    ...project,
    project_completed: project.project_completed === 1 ? true : false,
  }));
}

module.exports = { getAll };
