import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddRecipePage from "../components/AddRecipePage";
import EditRecipePage from "../components/EditRecipePage";
import RecipePage from "../components/RecipePage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/create" component={AddRecipePage} />
      <PrivateRoute path="/edit/:id" component={EditRecipePage} />
      <PrivateRoute path="/recipe/:id" component={RecipePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
