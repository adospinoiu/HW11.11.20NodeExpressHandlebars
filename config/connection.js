//**** THIS FILE IS COMPLETE ****//

// Sets up the connection to MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Makes the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports the connection for use in the ORM
module.exports = connection;