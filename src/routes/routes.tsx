import { Component } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { ComponentType } from "react";

interface PrivateRouteProps {
  component: ComponentType<any>;
  path: string;
}

function PrivateRoute({ component: Component, path }: PrivateRouteProps) {
  const token = localStorage.getItem("token");

  return token ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
}

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sing-up" component={SignUp} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  );
}