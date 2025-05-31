const express = require("express");
const planetController = require("../controllers/planets");

const router = express.Router();

/**
 *   Route to get all planets
 *   @description This route retrieves all planets from the database and returns them as a JSON response.
 *   @returns {Array} An array of planet objects.
 *
 */
router.get("/", planetController.getAllPlanets);

/**
 *  Route to get a planet by its ID
 *  @description This route retrieves a specific planet by its ID from the database and returns it as a JSON response.
 *  @param {string} id - The ID of the planet to retrieve.
 *  @returns {Object} A planet object with the specified ID.
 *  @throws {404} If the planet with the specified ID is not found.
 */
router.get("/:name", planetController.getPlanetByName);

module.exports = router;
