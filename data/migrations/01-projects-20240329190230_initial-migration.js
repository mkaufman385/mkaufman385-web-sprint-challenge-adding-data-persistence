exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("project_id");
    table.string("project_name", 128).notNullable();
    table.string("project_description");
    table.string("project_completed").defaultTo(0);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
};
