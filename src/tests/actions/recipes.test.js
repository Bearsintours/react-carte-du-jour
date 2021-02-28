import { addRecipe, setRecipes, removeRecipe, editRecipe } from "../../actions/recipes";
import { recipes } from "../fixtures/recipes";

test("should set up add recipe action object with provided value", () => {
  const action = addRecipe(recipes[0]);
  expect(action).toEqual({ type: "ADD_RECIPE", recipe: recipes[0] });
});

test("should set up remove recipe action object", () => {
  const action = removeRecipe("testid");
  expect(action).toEqual({ type: "REMOVE_RECIPE", id: "testid" });
});

test("should set up edit recipe action object", () => {
  const action = editRecipe(recipes[1]);
  expect(action).toEqual({ type: "EDIT_RECIPE", recipe: recipes[1] });
});

test("should set up set recipe action with data", () => {
  const action = setRecipes(recipes);
  expect(action).toEqual({ type: "SET_RECIPES", recipes: recipes });
});
