// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import authReducer from "../reducers/auth";
import recipeReducer from "../reducers/recipes";
import filterReducer from "../reducers/filters";

function render(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(
      combineReducers({
        auth: authReducer,
        recipes: recipeReducer,
        filters: filterReducer,
      })
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
