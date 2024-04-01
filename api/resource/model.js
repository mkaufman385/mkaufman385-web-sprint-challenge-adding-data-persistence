const db = require("../../data/dbConfig");

async function getAll() {
  // return db("resources");
  return Promise.resolve("awesome resource from resource model");
}

module.exports = { getAll };
