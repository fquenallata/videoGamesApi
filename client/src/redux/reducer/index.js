import { GET_VIDEOGAMES } from "../actions/types.js";

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

    default:
      return state;
  }
}

export default rootReducer;
