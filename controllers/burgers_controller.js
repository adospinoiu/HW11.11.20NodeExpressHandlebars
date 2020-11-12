const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Make this work
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data
    };
    console.log("Result (CONTROLLER - hbsObject): \n")
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Make this work
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Make this work
router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({devoured: true}, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;