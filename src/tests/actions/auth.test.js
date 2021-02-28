import { login, logout } from "../../actions/auth";

test("should login", () => {
  const action = login("uid");
  expect(action).toEqual({ type: "LOGIN", uid: "uid" });
});

test("should logout", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});
