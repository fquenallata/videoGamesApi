import {
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
  RESET_FILTERS,
  ORDER_VIDEOGAMES_BY_RATING,
  ORDER_VIDEOGAMES_ALPHATICALLY,
  FILTER_VIDEOGAMES_BY_ORIGIN,
  FILTER_VIDEOGAMES_BY_GENRE,
} from "./types.js";
import axios from "axios";

export function postVideoGame(videogame) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/videogames",
        videogame
      );
      return dispatch({
        type: POST_VIDEOGAME,
        payload: [data],
      });
    } catch (error) {
      alert("Error posting video game: " + error);
    }
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

export function orderVideoGamesByRating(option) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_VIDEOGAMES_BY_RATING,
      payload: option,
    });
  };
}

export function orderVideoGamesAlphabetically(option) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_VIDEOGAMES_ALPHATICALLY,
      payload: option,
    });
  };
}

export function filterVideoGamesByGenre(option) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_VIDEOGAMES_BY_GENRE,
      payload: option,
    });
  };
}

export function filterVideoGamesByOrigin(option) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_VIDEOGAMES_BY_ORIGIN,
      payload: option,
    });
  };
}

export function getVideoGames() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRES,
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
