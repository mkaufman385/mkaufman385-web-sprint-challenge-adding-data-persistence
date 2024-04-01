exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("project_id").primary();
    table.string("project_name", 128).notNullable();
    table.string("project_description");
    table.boolean("project_completed").defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
};
