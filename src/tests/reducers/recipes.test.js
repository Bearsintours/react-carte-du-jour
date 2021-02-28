import recipeReducer from "../../reducers/recipes";
import { recipes } from "../fixtures/recipes";

test("should return initial state", () => {
  expect(recipeReducer(undefined, {})).toEqual([]);
});

test("should add a recipe", () => {
  const recipe = {
    id: "3",
    name: "test recipe 2",
    prepTime: "25 min",
    ingredients: ["first ingredient", "second ingredient"],
    directions: ["direction 1", "direction 2"],
  };
  const action = { type: "ADD_RECIPE", recipe };
  expect(recipeReducer(recipes, action)).toEqual([...recipes, recipe]);
});

test("should set recipes", () => {
  const action = { type: "SET_RECIPES", recipes };
  expect(recipeReducer(undefined, action)).toEqual(recipes);
});

test("should remove a recipe", () => {
  const action = { type: "REMOVE_RECIPE", id: recipes[0].id };
  expect(recipeReducer(recipes, action)).toEqual([recipes[1]]);
});

test("should edit a recipe", () => {
  const recipe = { ...recipes[1], directions: [...recipes[1].directions, "direction 3"] };
  const action = { type: "EDIT_RECIPE", recipe };
  expect(recipeReducer([recipes[1]], action)).toEqual([recipe]);
});
