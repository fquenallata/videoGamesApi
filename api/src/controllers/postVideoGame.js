const handleErrors = require("../utils/handleErrors.js");
const { VideoGames } = require("../db.js");

const postVideoGame = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      platforms,
      release_date,
      rating,
      genres,
    } = req.body;
    if (
      name &&
      image &&
      description &&
      description &&
      platforms &&
      release_date &&
      rating &&
      genres
    ) {
      const newVideoGame = await handleErrors(
        VideoGames.create({
          name,
          image,
          description,
          platforms,
          release_date,
          rating,
        }),
        "Error creating the new video game"
      );
      await handleErrors(
        newVideoGame.addGenres(genres),
        "Error adding the genres relationship"
      );
      res.status(200).json(newVideoGame);
    } else {
      res.status(404).json({ error: "Incorrect or insufficient data" });
    }
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
module.exports = postVideoGame;
