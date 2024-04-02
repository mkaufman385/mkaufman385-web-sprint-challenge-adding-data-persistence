const db = require("../../data/dbConfig");

async function getAll() {
  // return db("tasks");
  const tasks = await db("tasks").select(
    "task_id",
    "task_description",
    "task_notes",
    "task_completed"
    // "project_name",
    // "project_description"
  );

  return tasks.map((task) => ({
    ...task,
    task_completed: task.task_completed === 1 ? true : false,
  }));
}

module.exports = { getAll };
