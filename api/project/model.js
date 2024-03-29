function getProjectById(project_id) {
  return Promise.resolve(`Impressive project with id ${project_id}`);
}

module.exports = { getProjectById };
