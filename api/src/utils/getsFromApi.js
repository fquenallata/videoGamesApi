const axios = require("axios");
const { API_URL, API_KEY } = process.env;

const getGenresFromApi = async () => {
  try {
    const URL = `${API_URL}/genres?key=${API_KEY}`;
    const { data } = await axios.get(URL);
    const genresFromApi = data.results.map((genre) => ({
      name: genre.name,
    }));
    return genresFromApi;
  } catch (error) {
    throw new Error("Error retrieving data from the API");
  }
};

const getVideoGameByIdFromApi = async (id) => {
  try {
    const URL = `${API_URL}/games/${id}?key=${API_KEY}`;
    const { data } = await axios.get(URL);
    let platformFiltered = [];
    if (data.platforms.length) {
      platformFiltered = data.platforms.map(
        (platforms) => platforms.platform.name
      );
    }
    let genresFiltered = [];
    if (data.genres.length) {
      genresFiltered = data.genres.map((genre) => genre.name);
    }
    const videogame = [
      {
        id: data.id,
        name: data.name,
        image: data.background_image,
        description: data.description,
        platforms: platformFiltered,
        release_date: data.released,
        rating: data.rating,
        genres: genresFiltered,
      },
    ];
    return videogame;
  } catch (error) {
    throw new Error("Error retrieving data from the API");
  }
};

const getVideoGamesFromApi = async () => {
  try {
    const URL = `${API_URL}/games?key=${API_KEY}&page_size=33`;
    let allVideoGames = [];
    for (let i = 1; i <= 3; i++) {
      const { data } = await axios.get(`${URL}&page=${i}`);
      allVideoGames = [...allVideoGames, ...data.results];
    }
    const videogamesFormmated = allVideoGames.map((videogame) => {
      let platformFiltered = [];
      if (videogame.platforms) {
        platformFiltered = videogame.platforms.map(
          (platform) => platform.platform.name
        );
      }
      let genresFiltered = [];
      if (videogame.genres) {
        genresFiltered = videogame.genres.map((genre) => genre.name);
      }
      return {
        id: videogame.id,
        name: videogame.name,
        platforms: platformFiltered,
        image: videogame.background_image,
        release_date: videogame.released,
        rating: videogame.rating,
        genres: genresFiltered,
      };
    });
    return videogamesFormmated;
  } catch (error) {
    throw new Error("Error retrieving data from the API");
  }
};

const getVideoGamesByNameFromApi = async (name, apiPageSize) => {
  if (apiPageSize <= 0) {
    return [];
  }
  try {
    const URL = `${API_URL}/games?key=${API_KEY}&search=${name}&page_size=${apiPageSize}`;
    const { data } = await axios.get(URL);
    const videogamesFormmated = data.results.map((videogame) => {
      let platformFiltered = [];
      if (videogame.platforms) {
        platformFiltered = videogame.platforms.map(
          (platform) => platform.platform.name
        );
      }
      let genresFiltered = [];
      if (videogame.genres) {
        genresFiltered = videogame.genres.map((genre) => genre.name);
      }
      return {
        id: videogame.id,
        name: videogame.name,
        platform: platformFiltered,
        image: videogame.background_image,
        release_date: videogame.released,
        rating: videogame.rating,
        genres: genresFiltered,
      };
    });
    return videogamesFormmated;
  } catch (error) {
    throw new Error("Error retrieving data from the API");
  }
};

module.exports = {
  getGenresFromApi,
  getVideoGameByIdFromApi,
  getVideoGamesFromApi,
  getVideoGamesByNameFromApi,
};
