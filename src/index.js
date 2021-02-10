import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./services/firebase";
import LoadingPage from "./components/LoadingPage";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

// Firebase auth state observer
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
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
