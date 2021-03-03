import React from "react";
import { render, screen } from "../test-utils";
import { RecipeList } from "../../components/RecipeList";
import { recipes } from "../fixtures/recipes";

const filters = { text: "" };

test("render the correct title when no recipe saved", () => {
  render(<RecipeList filters={filters} recipes={[]} />);
  expect(screen.getByText("Start adding recipes!")).toBeTruthy();
});

test("render the correct title when saved recipes", () => {
  render(<RecipeList filters={filters} recipes={recipes} />);
  expect(screen.getByText("Your saved recipes:")).toBeTruthy();
});

test("render all recipes", () => {
  render(<RecipeList filters={filters} recipes={recipes} />);
  expect(screen.getByText("test recipe")).toBeTruthy();
  expect(screen.getByText("test recipe 2")).toBeTruthy();
});

test("render filtered recipes", () => {
  filters.text = "recipe 2";
  render(<RecipeList filters={filters} recipes={recipes} />);
  expect(screen.queryByText("test recipe")).toBeNull();
  expect(screen.getByText("test recipe 2")).toBeTruthy();
});
