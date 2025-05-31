const Planet = require("../models/Planet");

async function getAllPlanets(req, res) {
  const planets = await Planet.getAllPlanets();

  if (!planets) {
    return res.status(404).json({ error: "No planets found" });
  }

  res.status(200).json(planets);
}

async function getPlanetById(req, res) {
  const planet = await Planet.getPlanetById(req.params.id);

  if (!planet) {
    return res.status(404).json({ error: `Planet with ID ${id} not found` });
  }

  res.status(200).json(planet);
}

async function getPlanetByName(req, res) {
  const planet = await Planet.getPlanetByName(req.params.name);
  if (!planet) {
    return res
      .status(404)
      .json({ error: `Planet with name ${req.params.name} not found` });
  }
  res.render("planet", {
    title: planet.name,
    planet: planet,
  });
}

module.exports = {
  getAllPlanets,
  getPlanetById,
  getPlanetByName,
};
