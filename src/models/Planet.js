const db = require("../lib/db");

/**
 *  Planet Model
 *   @description This model interacts with the planets table in the database.
 *                It provides a method to retrieve all planets.
 */
class Planet {
  /**
   * Retrieves all planets from the database.
   * @returns {Promise<Array>} A promise that resolves to an array of planet objects.
   */
  static getAllPlanets() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM planets`;
      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * Retrieves a planet by its ID.
   * @param {number} id - The ID of the planet to retrieve.
   * @returns {Promise<Object>} A promise that resolves to a planet object.
   */
  static getPlanetById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM planets WHERE id = ?`;
      db.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  /**
   *  Retrieves a planet by its name.
   *  @param {string} name - The name of the planet to retrieve.
   *  @returns {Promise<Object>} A promise that resolves to a planet object.
   */
  static getPlanetByName(name) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM planets WHERE name = ? COLLATE NOCASE`;
      db.get(query, [name], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
}

module.exports = Planet;
