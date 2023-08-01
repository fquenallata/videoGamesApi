const handleErrors = require("../utils/handleErrors.js");
const { getVideoGameByIdFromApi } = require("../utils/getsFromApi");
const { VideoGames, Genres } = require("../db.js");

const getVideoGameById = async (req, res) => {
  const { idvideogame } = req.params;
  try {
    if (idvideogame.length < 32) {
      const videogameFromAPI = await getVideoGameByIdFromApi(idvideogame);
      if (videogameFromAPI.length) {
        res.status(200).json(videogameFromAPI);
      } else {
        res.status(404).json({ error: "No data for that ID or wrong ID" });
      }
    } else {
      let videoGameFromBD = await handleErrors(
        VideoGames.findAll({
          where: { id: idvideogame },
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
      if (videoGameFromBD.length) {
        videoGameFromBD = videoGameFromBD[0].toJSON();
        videoGameFromBD.genres = videoGameFromBD.genres.map(
          (genre) => genre.name
        );
        res.status(200).json([videoGameFromBD]);
      } else {
        res.status(404).json({ error: "No data for that ID or wrong ID" });
      }
    }
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

module.exports = getVideoGameById;
