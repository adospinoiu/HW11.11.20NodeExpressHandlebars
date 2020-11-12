//**** THIS FILE IS COMPLETE ****//

// Sets up the connection to MySQL
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$n@k3t0wn!$myH0m",
    database: "burger_db"
  });
};

// Exports the connection for use in the ORM
connection.connect();
module.exports = connection;