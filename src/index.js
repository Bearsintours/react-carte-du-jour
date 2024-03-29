import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./services/firebase";
import LoadingPage from "./components/LoadingPage";
import { startSetRecipes } from "./actions/recipes";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("app"));
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    root.render(
      <React.StrictMode>
        <React.StrictMode>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </React.StrictMode>
      </React.StrictMode>
    );
    hasRendered = true;
  }
};

root.render(
  <React.StrictMode>
    <LoadingPage />
  </React.StrictMode>
);

// Firebase auth state observer
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetRecipes()).then(() => {
      renderApp();
    });
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
