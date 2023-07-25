import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from "./types.js";
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
