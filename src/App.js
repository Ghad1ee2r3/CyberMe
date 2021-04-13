import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavBar from "./NavBar";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div id="app" className="container-fluid">
        <div className="row">
        <div className="col-1">
       
       </div>
          <div className="content col-10">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Redirect exact from="/logout" to="/login" />
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default App;
