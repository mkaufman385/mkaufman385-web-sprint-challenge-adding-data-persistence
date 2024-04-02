const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .leftJoin("projects", "tasks.project_id", "projects.project_id");

  return tasks.map((task) => ({
    ...task,
    task_completed: task.task_completed === 1 ? true : false,
  }));
}

module.exports = { getAll };
