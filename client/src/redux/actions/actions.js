import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
  RESET_FILTERS,
  FILTER_VIDEOGAMES_BY_RATING,
  FILTER_VIDEOGAMES_BY_ORIGIN,
  FILTER_VIDEOGAMES_BY_GENRE,
  FILTER_VIDEOGAMES_ALPHATICALLY,
} from "./types.js";
import axios from "axios";

export function postVideoGame(videogame) {
  return async function (dispatch) {
    const { data } = await axios.post(
      "http://localhost:3001/videogames",
      videogame
    );
    return dispatch({
      type: POST_VIDEOGAME,
      payload: [data],
    });
  };
}

export function resetFilters() {
  return function (dispatch) {
    return dispatch({
      type: RESET_FILTERS,
      payload: "",
    });
  };
}

export function filterVideoGamesByRating(option) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_VIDEOGAMES_BY_RATING,
      payload: option,
    });
  };
}

// export function filterVideoGamesAlphabetically(allVideoGames) {
//   return function (dispatch) {
//     return dispatch({
//       type: FILTER_VIDEOGAME_ALPHATICALLY,
//       payload: allVideoGames,
//     });
//   };
// }

// export function filterVideoGamesByGenre(allVideoGames) {
//   return function (dispatch) {
//     return dispatch({
//       type: FILTER_VIDEOGAME_BY_GENRE,
//       payload: allVideoGames,
//     });
//   };
// }

// export function filterVideoGamesByOrigin(allVideoGames) {
//   return function (dispatch) {
//     return dispatch({
//       type: FILTER_VIDEOGAME_BY_ORIGIN,
//       payload: allVideoGames,
//     });
//   };
// }

export function getVideoGames() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  };
}

export function getVideoGamesByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/videogames/search?name=${name}`
    );
    return dispatch({
      type: GET_VIDEOGAMES_BY_NAME,
      payload: data,
    });
  };
}

export function getVideoGamesById(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: GET_VIDEOGAMES_BY_ID,
      payload: data,
    });
  };
}
