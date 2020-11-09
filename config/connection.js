//**** THIS FILE IS COMPLETE ****//

// Sets up the connection to MySQL
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$n@k3t0wn!$myH0m",
    database: "burgers_db"
  });
};

// Makes the connection
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Exports the connection for use in the ORM
connection.connect;
module.exports = connection;