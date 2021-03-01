import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginPage } from "../../components/LoginPage";

test("render login button", () => {
  render(<LoginPage />);
  expect(screen.getByRole("button")).toHaveTextContent("Login with Google");
});

test("click Login button dispatch startLogin", () => {
  const startLogin = jest.fn();
  render(<LoginPage startLogin={startLogin} />);
  userEvent.click(screen.getByText("Login with Google"));
  expect(startLogin).toHaveBeenCalledTimes(1);
});
