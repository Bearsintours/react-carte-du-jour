const recipeReducerDefaultState = [];

export default function recipeReducer(state = recipeReducerDefaultState, action) {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.recipe];
    case "SET_RECIPES":
      return action.recipes;
    case "REMOVE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.id);
    case "EDIT_RECIPE":
      return state.map((recipe) => (recipe.id === action.recipe.id ? action.recipe : recipe));
    default:
      return state;
  }
}
