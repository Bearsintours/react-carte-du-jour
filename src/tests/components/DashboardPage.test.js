import React from "react";
import { render, screen } from "../test-utils";
import DashboardPage from "../../components/DashboardPage";

test("render search form", () => {
  render(<DashboardPage />);
  expect(screen.getByPlaceholderText("Search")).toBeTruthy();
});

test("render create recipe button", () => {
  render(<DashboardPage />);
  expect(screen.getByText("Add Recipe")).toBeTruthy();
  expect(screen.getByRole("link").href).toContain("/create");
});
