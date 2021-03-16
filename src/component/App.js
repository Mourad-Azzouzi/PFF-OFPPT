import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/home';
import Plats from './Plats/Plats';
import Login from './Account/login';
import Register from './Account/register';


export default function App() {

   

   return(
      <Router>
            <Switch>
               {/* Home Component*/}
               <Route exact path="/">
                  <Home/>
               </Route>
               {/* Nos Plats Component */}
               <Route path="/Plats">
                  <Plats/>
               </Route>
               {/* Login Component*/}
               <Route path="/Login">
                  <Login/>
               </Route>
               {/* Register Component*/}
               <Route path="/Register">
                  <Register/>
               </Route>
            </Switch>
      </Router>
   )
}