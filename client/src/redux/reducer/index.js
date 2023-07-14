import { GET_RECIPES } from "../actions/types.js";

let initialState = { allRecipes: [], allRecipesCopy: [], posts: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
