import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage, OrderPage } from "./pages";
import { Layout } from "./components";

import './styles/styles.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Layout component={<MainPage />} />
        </Route>
        <Route path="/order" exact={true}>
          <Layout component={<OrderPage />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
