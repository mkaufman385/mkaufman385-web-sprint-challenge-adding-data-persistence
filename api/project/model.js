const db = require("../../data/dbConfig");

async function getProjectById() {
  const projectRows = await db("project as p");
  // .where("project_id", project_id);

  return projectRows;
}

module.exports = { getProjectById };
