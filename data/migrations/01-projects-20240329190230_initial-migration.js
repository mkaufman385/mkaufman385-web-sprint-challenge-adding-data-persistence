exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("project_id");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
};
