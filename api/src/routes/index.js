const express = require("express");
const router = express.Router();

const diets = require("./diets.js");
const recipes = require("./recipes.js");

router.use("/diets", diets);
router.use("/recipes", recipes);
//router.use("/recipes", recipes);

module.exports = router;
