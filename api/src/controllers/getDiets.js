const axios = require("axios");
const { Diets } = require("../db.js");
const URL =
  "http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=1";

const getDiets = async (req, res) => {
  try {
    const dietsFromBD = await Diets.findAll();
    if (dietsFromBD.length) {
      res.status(200).json(dietsFromBD);
    } else {
      const allDietsFromApi = await getDietsFromApi();
      let diets = allDietsFromApi.map((diet) => {
        return { name: diet };
      });
      diets = await Diets.bulkCreate(diets);
      res.status(200).json(diets);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getDietsFromApi = async () => {
  try {
    const { data } = await axios.get(URL);
    let diets = [];

    for (let i = 0; i < data.results.length; i++) {
      diets = [...data.results[i].diets, ...diets];
    }

    const dietsSet = new Set(diets);
    diets = [...dietsSet];

    return diets;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getDiets;
