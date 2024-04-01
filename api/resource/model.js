const db = require("../../data/dbConfig");

async function getAll() {
  return db("resources");
}

module.exports = { getAll };
