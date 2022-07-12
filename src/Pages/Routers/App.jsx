import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../Main/Home";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default RouteComponent;
