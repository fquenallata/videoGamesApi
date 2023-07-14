const express = require("express");
const router = express.Router();

const {
  postRecipes,
  getRecipeById,
  getRecipeByName,
} = require("../controllers");

router.post("/", postRecipes);
router.get("/search", getRecipeByName);
router.get("/:idRecipe", getRecipeById);

module.exports = router;
