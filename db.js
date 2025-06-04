const sqlite = require("sqlite3").verbose();
const path = require("path");

/**
 *  Database connection
 *  @description This module sets up a connection to a SQLite database.
 *                It uses the sqlite3 library to open a database file located in the "db" directory.
 *                If the connection is successful, it logs a message to the console.
 *                If there is an error, it logs the error message.
 */
const db = new sqlite.Database(
  path.join(__dirname, "..", "db", "planets.db"),
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error("Error opening database:", err.message);
    } else {
      console.log("Connected to the database.");
    }
  }
);

module.exports = db;
// This module exports the db function, which can be used to get a database connection
// in other parts of the application.
