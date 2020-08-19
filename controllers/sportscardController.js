const Sportscard = require("../models/sportscardModel");

// Defining methods for the merchController
module.exports = {
  findAll: function(req, res) {
    Sportscard
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};