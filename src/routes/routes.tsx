import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { ComponentType } from "react";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Profile } from "../pages/Profile";
import {Portifolio}  from "../pages/Portifolio";

interface PrivateRouteProps {
  component: ComponentType<any>;
  path: string;
}

function PrivateRoute({ component: Component, path }: PrivateRouteProps) {
  const token = localStorage.getItem("token");

  return token ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/sign-in" />
  );
}

export function Routes() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />       
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute  path="/portifolio/:id" component={Portifolio} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}