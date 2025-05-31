const express = require("express");

/**
 *  Simple Express server setup
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

/**
 * Start the server
 */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
