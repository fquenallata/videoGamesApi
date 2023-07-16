const axios = require("axios");
const handleErrors = require("../utils/handleErrors.js");
const { Genres } = require("../db.js");
const { API_URL, API_KEY } = process.env;
const URL = `${API_URL}/genres?key=${API_KEY}`;

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

const getGenresFromApi = async () => {
  try {
    const { data } = await axios.get(URL);
    //aca los preparo para el bulk
    const genresFromApi = data.results.map((genre) => ({
      name: genre.name,
    }));
    return genresFromApi;
  } catch (error) {
    throw new Error("Error retrieving data from the API");
  }
};

module.exports = getGenres;
