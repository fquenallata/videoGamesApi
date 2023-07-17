const { Op } = require("sequelize");
const { VideoGames, Genres } = require("../db.js");
const handleErrors = require("../utils/handleErrors.js");
const { getVideoGamesByNameFromApi } = require("../utils/getsFromApi.js");

const getVideoGamesByName = async (req, res) => {
  let { name } = req.query;

  try {
    let videoGamesFromBD = await handleErrors(
      VideoGames.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
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
    const apiPageSize = 15 - videoGamesFromBD.length;
    const videoGamesFromAPI = await getVideoGamesByNameFromApi(
      name,
      apiPageSize
    );
    res.status(200).json([...videoGamesFromBD, ...videoGamesFromAPI]);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
module.exports = getVideoGamesByName;
