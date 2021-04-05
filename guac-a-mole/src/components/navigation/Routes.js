import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../home/Home";
import Game from "../game/Game";

const Routes = () => {
  return (
    <Switch>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
