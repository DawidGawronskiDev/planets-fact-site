const express = require("express");
const path = require("path");

/**
 *  Simple Express server setup
 *  @description This code sets up a basic Express server that serves static files
 *               from a "public" directory and listens on a specified port.
 */
const app = express();
const port = 5000;

/**
 * Setup views
 *  @description This sets up the view engine for rendering HTML templates.
 *               In this case, it uses EJS (Embedded JavaScript) as the templating engine.
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/**
 * Public folder
 * @description  This serves static files from the "public" directory.
 *               You can place your HTML, CSS, JavaScript, and images here.
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes
 *  @description This sets up a simple route that responds with "Hello, World!" when
 *               the root URL is accessed.
 */
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

/**
 * Start the server
 *  @description This starts the server and listens on the specified port.
 *               It logs a message to the console when the server is running.
 */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
