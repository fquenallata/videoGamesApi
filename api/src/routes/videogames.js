const express = require("express");
const router = express.Router();

const {
  getVideoGames,
  getVideoGamesByName,
  getVideoGameById,
  postVideoGame,
} = require("../controllers");

router.get("/", getVideoGames);
router.get("/search", getVideoGamesByName);
router.get("/:idVideogame", getVideoGameById);
router.post("/", postVideoGame);

module.exports = router;
