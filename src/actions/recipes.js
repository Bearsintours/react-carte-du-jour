import database from "../services/firebase";

// ADD RECIPE
export const addRecipe = (recipe) => ({
  type: "ADD_RECIPE",
  recipe,
});

export const startAddRecipe = (recipeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { recipeName, ingredients, prepTime, instructions } = recipeData;
    const recipe = { recipeName, ingredients, prepTime, instructions };
    return database
      .ref(`users/${uid}/recipes`)
      .push(recipe)
      .then((ref) => {
        dispatch(addRecipe({ id: ref.key, ...recipe }));
      });
  };
};

// SET RECIPE
export const setRecipes = (recipes) => ({
  type: "SET_RECIPES",
  recipes,
});

export const startSetRecipes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`/users/${uid}/recipes`)
      .once("value")
      .then((snapshot) => {
        const recipes = [];
        snapshot.forEach((child) => {
          recipes.push({
            id: child.key,
            ...child.val(),
          });
        });
        dispatch(setRecipes(recipes));
      });
  };
};
