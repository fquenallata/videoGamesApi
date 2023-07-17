const handleErrors = require("../utils/handleErrors.js");
const { getGenresFromApi } = require("../utils/getsFromApi.js");
const { Genres } = require("../db.js");

const getGenres = async (req, res) => {
  try {
    const genresFromBD = await handleErrors(
      Genres.findAll(),
      "Error retrieving genres from the database"
    );

    if (genresFromBD.length) {
      res.status(200).json(genresFromBD);
    } else {
      let genresFromAPI = await getGenresFromApi();
      genresFromAPI = await handleErrors(
        Genres.bulkCreate(genresFromAPI),
        "Error initializing genres in the database"
      );
      res.status(201).json(genresFromAPI);
    }
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  } //
};

module.exports = getGenres;
