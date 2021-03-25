import React from "react";
import { useRouteMatch } from "react-router";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/Main";
import AddEditPage from "./Pages/AddEdit";
import NotFound from "../../components/NotFound";

const Photo = ({ props }) => {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url}>
        <MainPage />
      </Route>
      <Route exact path={`${match.url}/add`}>
        <AddEditPage />
      </Route>
      <Route exact path={`${match.url}/:photoId`}>
        <AddEditPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Photo;
