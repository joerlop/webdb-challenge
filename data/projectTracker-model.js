const db = require('./dbConfig');

module.exports = {
  getProject,
  addProject,
  addAction,
  getActionsByProjectId
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
}

function getActionsByProjectId(id) {
  return db("actions")
  .where({ "actions.project_id": id })
  .select("actions.id", "actions.description", "actions.notes", "actions.completed");
}