const axios = require("axios");
const handleErrors = require("../utils/handleErrors.js");
const { Genres } = require("../db.js");
const { API_URL, API_KEY } = process.env;
const URL = `${API_URL}/games/?key=${API_KEY}`;

const getVideoGameById = async (req, res) => {
  // const { idRecipe } = req.params;
  // let recipe = await Recipe.findAll({
  //   attributes: [
  //     "id",
  //     "title",
  //     "image",
  //     "summary",
  //     "healthScore",
  //     "instructions",
  //   ],
  //   where: { id: idRecipe },
  //   include: [
  //     {
  //       model: Diets,
  //       attributes: ["name"],
  //       through: { attributes: [] },
  //     },
  //   ],
  // });
  // if (recipe.length) {
  //   const { Diets, ...recipePropertys } = recipe[0].toJSON();
  //   recipe = {
  //     ...recipePropertys,
  //     diets: Diets.map((diet) => diet.name),
  //   };
  //   res.status(200).json(recipe);
  // } else {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:8080/recipes/${idRecipe}/information`
  //     );
  //     const recipeFiltered = {
  //       id: data.id,
  //       title: data.title,
  //       image: data.image,
  //       summary: data.summary,
  //       healthScore: data.healthScore,
  //       instructions: data.instructions,
  //       diets: data.diets,
  //     };
  //     res.status(200).json(recipeFiltered);
  //   } catch (error) {
  //     res.status(404).json({ message: "No data for that ID or wrong ID" });
  //   }
  // }
  res.status(404).json({ error: "hola1" });
};
module.exports = getVideoGameById;
