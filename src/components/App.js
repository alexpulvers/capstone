import React from "react";
import Header from "./Header";
import Forum from "./Forum";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteControl from  "./SiteControl";
import Homepage from "./Homepage";
import NavigationBar from "./NavigationBar";
import 'react-bootstrap'; 
import Calendar from "./Calendar";


function App() {
  return (
    <Router>
      <Header />
      <NavigationBar />
         <Switch>
       <Route path = "/Homepage">
         <Homepage />
       </Route>
       <Route path = "/Signin">
         <Signin/>
         </Route>
       <Route path = "/SiteControl">
         <SiteControl />
       </Route>
       <Route path = "/Calendar">
         <Calendar />
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
