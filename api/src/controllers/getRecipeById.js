const axios = require("axios");
const { Recipe, Diets } = require("../db.js");

//retorna un  json con "title","image","types of diets"(esta de la tabla intermedia),"summary","healthScore", "instructions"
const getRecipeById = async (req, res) => {
  const { idRecipe } = req.params;

  let recipe = await Recipe.findAll({
    attributes: [
      "id",
      "title",
      "image",
      "summary",
      "healthScore",
      "instructions",
    ],
    where: { id: idRecipe },
    include: [
      {
        model: Diets,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  if (recipe.length) {
    const { Diets, ...recipePropertys } = recipe[0].toJSON();
    recipe = {
      ...recipePropertys,
      diets: Diets.map((diet) => diet.name),
    };
    res.status(200).json(recipe);
  } else {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/recipes/${idRecipe}/information`
      );
      const recipeFiltered = {
        id: data.id,
        title: data.title,
        image: data.image,
        summary: data.summary,
        healthScore: data.healthScore,
        instructions: data.instructions,
        diets: data.diets,
      };
      res.status(200).json(recipeFiltered);
    } catch (error) {
      res.status(404).json({ message: "No data for that ID or wrong ID" });
    }
  }
};
module.exports = getRecipeById;

//Este de abajo funciona y me gustaria terminar de entender pero dps vemos

/*const axios = require("axios");
const { Recipe, Diets } = require("../db.js");
const URL = "http://localhost:8080/recipes/:id/information";

//retorna un  json con "title","image","types of diets"(esta de la tabla intermedia),"summary","healthScore", "instructions"
const getRecipeById = async (req, res) => {
  //Primero Busco en la BD

  //no utilizo try catch porque si findOne me rompe todavia tengo que buscar en la Api
  const { idRecipe } = req.params;
  //findOne a diferencia de findAll que retorna un array, retorna un objeto
  //ademas me deja usar el attributes
  //otras notas
  //findOne te va a romper si no encuentra
  //findAll no te rompe y no iria al catch porque este retorna un array vacio en ese caso
  try {
    let recipe = await Recipe.findOne({
      attributes: [
        "id",
        "title",
        "image",
        "summary",
        "healthScore",
        "instructions",
      ],
      where: { id: idRecipe },
      include: [
        {
          model: Diets,
          attributes: ["name"],
          through: { attributes: [] }, //esto hace que no se repita varias veces recipes en cada dieta
        },
      ],
    });

    //contexto: "queria cambiarle el nombre a un propiedad".
    //demore mucho aqui porque no entendia porque no me funcionaba "delete recipe.Diets"
    //resulta que si incluyo attributes en la query entonces los valores van a estar dentro del
    //objeto "dataValues" de recipe
    //por lo tanto siempre se debe usar "recipe.dataValues" para acceder a las propiedades de recipe
    //cuando se utilize attributes y TALVEZ EN OTROS CASOS TAMBIEN
    //ahora tengo la duda de porque funciona el map de abajo XD
    //vi que el chatGPT hace recipe.toJSON()
    //recipe es un objeto sequelize, para evitar incluir propiedades y valores adicionales
    //utilizo toJSON() que lo convierte en un objeto JSON() plano

    const diets = recipe.Diets.map((diet) => diet.name);
    delete recipe.dataValues.Diets;
    recipe.dataValues.diets = diets;
    res.status(200).json(recipe);
  } catch (err1) {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/recipes/${idRecipe}/information`
      );
      const recipeFiltered = {
        title: data.title,
        image: data.image,
        diets: data.diets,
        summary: data.summary,
        healthScore: data.healthScore,
        instructions: data.instructions,
      };
      res.status(200).json(recipeFiltered);
    } catch (err2) {
      res.status(404).json({ message: "No data for that ID or wrong ID" });
    }
  }
};
module.exports = getRecipeById; */
