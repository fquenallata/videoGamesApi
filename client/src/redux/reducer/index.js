// reducers/rootReducer.js
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
  FILTER_VIDEOGAMES_BY_RATING,
  RESET_FILTERS,
  FILTER_VIDEOGAMES_ALPHATICALLY,
} from "../actions/types.js";

import {
  sortVideoGamesByRating,
  sortVideoGamesAlphabetically,
} from "./filterFunctions.js";

let initialState = { allVideoGames: [], allVideoGamesCopy: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_VIDEOGAMES_ALPHATICALLY:
      const allVideoGamesSorted = sortVideoGamesAlphabetically(
        state.allVideoGames,
        payload
      );
      return {
        ...state,
        allVideoGames: allVideoGamesSorted,
      };

    case RESET_FILTERS:
      return {
        ...state,
        allVideoGames: state.allVideoGamesCopy,
      };

    case FILTER_VIDEOGAMES_BY_RATING:
      const allVideoGamesFiltered = sortVideoGamesByRating(
        state.allVideoGames,
        payload
      );
      return {
        ...state,
        allVideoGames: allVideoGamesFiltered,
      };

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

    case GET_VIDEOGAMES_BY_ID:
      return {
        ...state,
        allVideoGames: payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
        allVideoGames: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
