import { setTextFilter } from "../../actions/filters";

test("should set up text filter", () => {
  const action = setTextFilter("cilandro");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "cilandro" });
});
