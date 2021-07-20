import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import JoinRoom from "../pages/JoinRoom";
import PageNotFound from '../pages/404';

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sala/:code" component={JoinRoom}/>
        <Route exact path="/jogo" component={Game} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}