// Libraries
import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../home/Home";
import Grid from "../game/Grid";

const Routes = () => {
  return (
    <Switch>
      <Route path="/game">
        <Grid />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
