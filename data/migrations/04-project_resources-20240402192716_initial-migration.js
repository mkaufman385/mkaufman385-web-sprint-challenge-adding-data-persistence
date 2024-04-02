exports.up = function (knex) {
  return knex.schema.createTable("project_resources", (table) => {
    table.increments();
    table.integer("project_id").unsigned().notNullable();
    table.integer("resource_id").unsigned().notNullable();
    table.foreign("project_id").references("project_id").inTable("projects");
    table.foreign("resource_id").references("resource_id").inTable("resources");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
