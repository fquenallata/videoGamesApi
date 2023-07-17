const { Op } = require("sequelize");
const handleErrors = require("../utils/handleErrors.js");
const { getVideoGamesFromApi } = require("../utils/getsFromApi.js");
const { VideoGames, Genres } = require("../db.js");
const getVideoGames = async (req, res) => {
  try {
    let videoGamesFromBD = await handleErrors(
      VideoGames.findAll({
        include: [
          {
            model: Genres,
            attributes: ["name"],
            through: { attributes: [] },
            as: "genres",
          },
        ],
      }),
      "Error retrieving videogames from the database"
    );
    if (videoGamesFromBD.length) {
      videoGamesFromBD = videoGamesFromBD.map((game) => {
        const { genres, ...gameProps } = game.toJSON();
        return {
          ...gameProps,
          genres: genres.map((genre) => genre.name),
        };
      });
    }
    const videoGamesFromAPI = await getVideoGamesFromApi();
    res.status(200).json([...videoGamesFromBD, ...videoGamesFromAPI]);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
module.exports = getVideoGames;
