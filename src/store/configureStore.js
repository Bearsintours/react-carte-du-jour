import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import recipeReducer from "../reducers/recipes";
import filterReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function rootReducer() {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      recipes: recipeReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
