import React from "react";
import { render, screen } from "../test-utils";
import RecipeListItem from "../../components/RecipeListItem";
import { recipes } from "../fixtures/recipes";

test("render all recipe items", () => {
  render(<RecipeListItem recipe={recipes[0]} />);
  expect(screen.getByTestId("name")).toHaveTextContent("test recipe");
  expect(screen.getByTestId("prepTime")).toHaveTextContent("Preparation time: 15 min");
  expect(screen.getByTestId("ingredients")).toHaveTextContent("Ingredients:");
});
