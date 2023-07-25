import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from "../actions/types.js";

let initialState = { allVideoGames: [], allVideoGamesCopy: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideoGames: payload,
        allVideoGamesCopy: payload,
      };

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        allVideoGames: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
