import React from "react";
import Header from "./Header";
import Forum from "./Forum";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteControl from "./SiteControl";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Signin">
          <Signin />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/SiteControl">
          <SiteControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
