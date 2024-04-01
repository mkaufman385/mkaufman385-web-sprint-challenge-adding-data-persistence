const db = require("../../data/dbConfig");

async function getAll() {
  return db("tasks");
}

module.exports = { getAll };
