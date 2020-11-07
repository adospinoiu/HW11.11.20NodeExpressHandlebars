// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    // Make this work
    selectAll: function(cb) {
      orm.selectAll("cats", function(res) {
        cb(res);
      });
    },

    // Make this work
    insertOne: function(cols, vals, cb) {
      orm.insertOne("cats", cols, vals, function(res) {
        cb(res);
      });
    },

    // Make this work
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("cats", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_controller.js).
  module.exports = burger;