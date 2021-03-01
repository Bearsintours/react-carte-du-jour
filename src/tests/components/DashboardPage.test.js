import React from "react";
import { render, screen } from "../test-utils";
import DashboardPage from "../../components/DashboardPage";

test("render search form", () => {
  render(<DashboardPage />);
  expect(screen.getByPlaceholderText("Search")).toBeTruthy();
});
