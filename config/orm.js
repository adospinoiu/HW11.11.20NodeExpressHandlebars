const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    const arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
}

const orm = {
    // Function to display all from the database
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function (err, result) {
            if (err) throw err;
            console.table(result);
            cb(result)
        });
    },

    // Need to make sure this works
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
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