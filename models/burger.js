// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    // Make this work
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
        console.log("Result (MODEL - res): \n")
        console.log(res);
      });
    },

    // Make this work
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    // Make this work
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_controller.js).
  module.exports = burger;