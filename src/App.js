import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Profile from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavBar from "./NavBar";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home/">
          <home />
        </Route>
        <Redirect exact from="/logout" to="/login" />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
