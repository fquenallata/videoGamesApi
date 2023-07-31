import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
} from "./types.js";
import axios from "axios";

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

export function postVideoGame(videogame) {
  return async function (dispatch) {
    const { data } = await axios.post(
      "http://localhost:3001/recipes",
      videogame
    );
    return dispatch({
      type: POST_VIDEOGAME,
      payload: [data],
    });
  };
}
