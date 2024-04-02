exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id").primary();
    table.string("task_description", 128).notNullable();
    table.string("task_notes");
    table.boolean("task_completed").defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
};
