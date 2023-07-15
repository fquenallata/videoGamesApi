const postVideoGame = async (req, res) => {
  // try {
  //   const { title, image, summary, healthScore, instructions, diets } =
  //     req.body;
  //   if (title && image && summary && healthScore && instructions && diets) {
  //     const newRecipe = await Recipe.create({
  //       title,
  //       image,
  //       summary,
  //       healthScore,
  //       instructions,
  //     });
  //     await newRecipe.addDiets(diets);
  //     res.status(200).json(newRecipe);
  //   } else {
  //     res.status(404).json({ error: "datos insuficientes" });
  //   }
  // } catch (error) {
  //   res.status(404).json({ error: error.message });
  // }
  res.status(404).json({ error: "hola4" });
};
module.exports = postVideoGame;
