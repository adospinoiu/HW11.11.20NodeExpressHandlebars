const connection = require("./connection.js");

const orm = {
    // Function to display all from the database
    selectAll: function () {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    },

    // Need to make sure this works
    insertOne: function () {
        const queryString = "INSERT INTO burgers (burger_name) VALUES ?";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    },

    // Need to make sure this works
    updateOne: function () {
        const queryString = "SELECT * FROM parties WHERE party_type = 'grown-up'";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    },
};


module.exports = orm;