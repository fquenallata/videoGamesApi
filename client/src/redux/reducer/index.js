import {
  RESET_FILTERS,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
  ORDER_VIDEOGAMES_BY_RATING,
  ORDER_VIDEOGAMES_ALPHATICALLY,
  FILTER_VIDEOGAMES_BY_ORIGIN,
} from "../actions/types.js";

import {
  sortVideoGamesByRating,
  sortVideoGamesAlphabetically,
  filterVideoGamesByOrigin,
} from "./filterFunctions.js";

let initialState = { allVideoGames: [], allVideoGamesCopy: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_VIDEOGAMES_BY_ORIGIN:
      const VideoGamesByOrigin = filterVideoGamesByOrigin(
        state.allVideoGamesCopy,
        payload
      );
      return {
        ...state,
        allVideoGames: VideoGamesByOrigin,
      };

    case ORDER_VIDEOGAMES_ALPHATICALLY:
      const videoGamesAlphabetically = sortVideoGamesAlphabetically(
        state.allVideoGames,
        payload
      );
      return {
        ...state,
        allVideoGames: videoGamesAlphabetically,
      };

    case RESET_FILTERS:
      return {
        ...state,
        allVideoGames: state.allVideoGamesCopy,
      };

    case ORDER_VIDEOGAMES_BY_RATING:
      const videoGamesByRating = sortVideoGamesByRating(
        state.allVideoGames,
        payload
      );
      return {
        ...state,
        allVideoGames: videoGamesByRating,
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
