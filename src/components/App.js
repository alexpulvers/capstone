import React from "react";
import Forum from "./Forum";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteControl from  "./SiteControl";
import Homepage from "./Homepage";
import NavigationBar from "./NavigationBar";
import 'react-bootstrap'; 
import Calendar from "./Calendar";
import '../App.css';
import Footer from "./Footer";

function App() {
  return (
   
    <Router>
      <NavigationBar />
         <Switch>
       <Route path = "/Homepage">
         <Homepage />
         <Footer />
       </Route>
       <Route path = "/Signin">
         <Signin/>
         <Footer />
         </Route>
       <Route path = "/SiteControl">
         <SiteControl />
         <Footer />
       </Route>
       <Route path = "/Calendar">
         <Calendar />
         </Route>
       <Route path = "/Forum">
         <Forum />
         <Footer />
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
