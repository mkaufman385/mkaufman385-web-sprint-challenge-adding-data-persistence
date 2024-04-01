exports.up = async function (knex) {
  await knex.schema.createTable("resources", (table) => {
    table.increments("resource_id").primary();
    table.string("resource_name", 128).notNullable().unique();
    table.string("resource_description");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resources");
};
