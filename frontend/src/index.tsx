import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Kiosk from "./Kiosk/Kiosk";
import LandingPage from "./LandingPage/LandingPage";

import "purecss/build/base.css";
import "./styles/variables.css";
import "./styles/base.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/kiosk">
          <Kiosk />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);