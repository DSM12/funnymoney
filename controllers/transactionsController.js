const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.transactions.find(req.query)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.transactions.findById(req.params.id)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.transactions.create(req.body)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.transactions.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.transactions.findById(req.params.id)
      .then(dbTransactions => dbTransactions.remove())
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  }
};
