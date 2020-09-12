const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Transactions.find(req.query)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Transactions.findById(req.params.id)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Transactions.create(req.body)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Transactions.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Transactions.findById(req.params.id)
      .then(dbTransactions => dbTransactions.remove())
      .then(dbTransactions => res.json(dbTransactions))
      .catch(err => res.status(422).json(err));
  }
};
