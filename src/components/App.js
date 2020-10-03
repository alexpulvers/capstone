import React from "react";
import Header from "./Header";
import Forum from "./Forum";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteControl from "./SiteControl";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
       <Route path="/Homepage">
       <Homepage Homepage />
       </Route>
        <Route path="/Signin">
          <Signin />
        </Route>
        <Route path="/SiteControl">
          <SiteControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
