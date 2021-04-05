import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../home/Home";
import Grid from "../game/Grid";
import Gameover from "../gameover/Gameover";

const Routes = () => {
  return (
    <Switch>
      <Route path="/gameover">
        <Gameover />
      </Route>
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
