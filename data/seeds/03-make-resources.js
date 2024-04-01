const resources = [
  {
    resource_id: 1,
    resource_name: "foo",
    resource_description: null,
  },
];

exports.seed = async function (knex) {
  await knex("resources").insert(resources);
};
