import authReducer from "../../reducers/auth";

test("should return initial state", () => {
  expect(authReducer(undefined, {})).toEqual({});
});

test("should set uid for login", () => {
  const action = { type: "LOGIN", uid: "uid" };
  expect(authReducer(undefined, action)).toEqual({ uid: "uid" });
});

test("should clear uid for logout", () => {
  const action = { type: "LOGOUT" };
  expect(authReducer(undefined, action)).toEqual({});
});
