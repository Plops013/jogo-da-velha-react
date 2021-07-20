import React from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import JoinRoom from "../pages/JoinRoom";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </BrowserRouter>
  );
}