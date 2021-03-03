import React from "react";
import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import { Header } from "../../components/Header";

const history = { location: { pathname: "/dashboard" } };

test("render app title on home page", () => {
  render(<Header history={history} />);
  expect(screen.getByRole("link")).toHaveTextContent("Carte du Jour");
});

test("render home text from other pages", () => {
  history.location.pathname = "/create";
  render(<Header history={history} />);
  expect(screen.getByRole("link")).toHaveTextContent("Home");
});

test("render logout button", () => {
  render(<Header history={history} />);
  expect(screen.getByRole("button")).toHaveTextContent("Logout");
});

test("click Logout button dispatch startLogout", () => {
  const startLogout = jest.fn();
  render(<Header history={history} startLogout={startLogout} />);
  userEvent.click(screen.getByText("Logout"));
  expect(startLogout).toHaveBeenCalledTimes(1);
});
