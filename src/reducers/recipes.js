const recipeReducerDefaultState = [];

export default function recipeReducer(state = recipeReducerDefaultState, action) {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.recipe];
    case "SET_RECIPES":
      return action.recipes;
    default:
      return state;
  }
}
