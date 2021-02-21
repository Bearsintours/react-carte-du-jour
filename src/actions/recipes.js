import database from "../services/firebase";

// ADD RECIPE
export const addRecipe = (recipe) => ({
  type: "ADD_RECIPE",
  recipe,
});

export const startAddRecipe = (recipeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name, ingredients, prepTime, directions } = recipeData;
    const recipe = { name, ingredients, prepTime, directions };
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

// REMOVE RECIPE
export const removeRecipe = (id) => ({
  type: "REMOVE_RECIPE",
  id,
});

export const startRemoveRecipe = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/recipes/${id}`)
      .remove()
      .then(() => {
        dispatch(removeRecipe(id));
      });
  };
};

// EDIT RECIPE
export const startEditRecipe = (id, recipeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name, ingredients, prepTime, directions } = recipeData;
    const recipe = { name, ingredients, prepTime, directions };
    return database
      .ref(`users/${uid}/recipes/${id}`)
      .update(recipe)
      .then(() => dispatch(editRecipe({ id, ...recipe })));
  };
};

export const editRecipe = (recipe) => ({
  type: "EDIT_RECIPE",
  recipe,
});
