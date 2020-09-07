const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUserName: function(req, res) {
    db.User.findByUserName(req.params.UserName)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findPassword: function(req, res) {
    db.User.findPassword(req.params.Password)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
