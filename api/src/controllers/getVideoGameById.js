const axios = require("axios");
//retorna un  json con "title","image","types of diets"(esta de la tabla intermedia),"summary","healthScore", "instructions"
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
