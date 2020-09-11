const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Addex.find(req.query)
      .then(dbAddex => res.json(dbAddex))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Addex.findById(req.params.id)
      .then(dbAddex => res.json(dbAddex))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Addex.create(req.body)
      .then(dbAddex => res.json(dbAddex))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Addex.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAddex => res.json(dbAddex))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Addex.findById(req.params.id)
      .then(dbAddex => dbAddex.remove())
      .then(dbAddex => res.json(dbAddex))
      .catch(err => res.status(422).json(err));
  }
};
