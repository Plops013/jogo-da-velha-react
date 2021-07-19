import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import JoinRoom from "../pages/JoinRoom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sala/:code">
          <JoinRoom />
        </Route>
        <Route exact path="/jogo">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}