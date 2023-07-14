const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diets } = require("../db.js");
const { API_KEY } = process.env;

const getRecipeByName = async (req, res) => {
  let { name } = req.query;
  name = name.toLowerCase();
  try {
    let recipes = await Recipe.findAll({
      attributes: [
        "id",
        "title",
        "image",
        "summary",
        "healthScore",
        "instructions",
      ],
      where: {
        title: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [
        {
          model: Diets,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    if (recipes.length) {
      recipes = recipes.map((recipe) => {
        const { Diets, ...recipePropertys } = recipe.toJSON();
        return {
          ...recipePropertys,
          diets: Diets.map((diet) => diet.name),
        };
      });
    }

    const { data } = await axios.get(
      `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
    );
    const allRecipes = data.results;
    let recipesFiltered = allRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(name)
    );

    recipesFiltered = recipesFiltered.map((recipe) => {
      let instructions = [];

      if (recipe.analyzedInstructions.length) {
        instructions = recipe.analyzedInstructions[0].steps.map(
          (instruction) => instruction.step
        );
      }
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        instructions: instructions.join(" "),
        diets: recipe.diets,
      };
    });

    res.status(200).json([...recipes, ...recipesFiltered]);
  } catch (error) {
    res
      .status(404)
      .json({ message: "hola, necesitas ver mas sobre manejo de errores" });
  }
};
module.exports = getRecipeByName;
