// Manage Roles (id, name)
const express = require('express');
const helmet = require('helmet');

const db = require("./data/projectTracker-model")

const server = express();

server.use(helmet());
server.use(express.json());

// list all roles

server.post('/api/projects', (req, res) => {
  db.addProject(req.body)
  .then(ids => {
    res.status(201).json(ids)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.post('/api/actions', (req, res) => {
  db.addAction(req.body)
  .then(ids => {
    res.status(201).json(ids)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/api/projects/:id', (req, res) => {
  db.getProject(req.params.id)
  .then(project => {
    db.getActionsByProjectId(req.params.id)
    .then(actions => {
      project[0].actions = actions
      res.status(200).json(project)
    }).catch(err => {
      res.status(500).json(err)
    })
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/api/projects/:id/actions', (req, res) => {
  db.getActionsByProjectId(req.params.id)
  .then(actions => {
      res.status(200).json(actions)
  }).catch(err => {
    res.status(500).json(err)
  })
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
