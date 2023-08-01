// reducers/rootReducer.js
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_VIDEOGAME,
  FILTER_VIDEOGAMES_BY_RATING,
  RESET_FILTERS,
} from "../actions/types.js";

let initialState = { allVideoGames: [], allVideoGamesCopy: [] };

function sortVideoGamesByRating(videoGames, option) {
  const sortedVideoGames = [...videoGames];

  sortedVideoGames.sort((a, b) => {
    if (option === 1) {
      return a.rating - b.rating; // Ordenar de menor a mayor (low rating)
    } else {
      return b.rating - a.rating; // Ordenar de mayor a menor (high rating)
    }
  });

  return sortedVideoGames;
}

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESET_FILTERS:
      return {
        ...state,
        allVideoGames: state.allVideoGamesCopy,
      };

    case FILTER_VIDEOGAMES_BY_RATING:
      const allVideoGamesFiltered = sortVideoGamesByRating(
        state.allVideoGamesCopy,
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
