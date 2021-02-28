import filterReducer from "../../reducers/filters";

test("should return initial state", () => {
  expect(filterReducer(undefined, {})).toEqual({ text: "" });
});

test("should set text fitler", () => {
  const action = { type: "SET_TEXT_FILTER", text: "cilandro" };
  expect(filterReducer(undefined, action)).toEqual({ text: "cilandro" });
});
