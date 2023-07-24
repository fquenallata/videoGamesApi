import { GET_VIDEOGAMES } from "./types.js";
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
