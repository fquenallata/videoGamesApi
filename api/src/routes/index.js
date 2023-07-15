const express = require("express");
const router = express.Router();

const genres = require("./genres.js");
const videogames = require("./videogames.js");

router.use("/genres", genres);
router.use("/videogames", videogames);
//router.use("/recipes", recipes);

module.exports = router;
