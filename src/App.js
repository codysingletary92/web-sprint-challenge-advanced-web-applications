import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import BubblePage from './components/BubblePage'
import axios from 'axios';

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {
const history = useHistory();
const logout = e => {
  
  localStorage.removeItem('token')
  console.log(history)
}





  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={logout}>logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
          
        
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.