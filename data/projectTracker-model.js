const db = require('./dbConfig');

module.exports = {
  getProject,
  addProject,
  addAction
};

function addProject(project) {
  return db('projects')
    .insert(project)
}

function addAction(action) {
  return db('actions')
    .insert(action)
}

function getProject(id) {
  return db("projects")
    .where({ "projects.id": id })
    .join("actions", { "projects.id": "actions.project_id" })
}
