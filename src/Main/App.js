import React, { useEffect, useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TestResults from "../Pages/Results/TestResults";
import PledgesPage from "../Pages/PledgesPage/PledgesPage";

const App = () => {
  const loggedIn = useContext(UserContext).loggedIn[0];
  const surveyTaken = useContext(UserContext).footprint[0];
  const headerRef = useRef(null);
  function scrollToTop() {
    headerRef.current.scrollIntoView();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div ref={headerRef}>
          <Header />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Frontpage {...props} scrollToTop={scrollToTop} />
              );
            }}
          />
          <Route
            path="/dashboard"
            render={(props) => {
              return loggedIn ? (
                <Dashboard {...props} scrollToTop={scrollToTop} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          <Route
            path="/results"
            render={(props) => {
              return loggedIn ? (
                <Redirect to="/dashboard" />
              ) : surveyTaken ? (
                <TestResults scrollToTop={scrollToTop} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          <Route
            path="/pledges"
            render={(props) => {
              return loggedIn ? (
                <PledgesPage scrollToTop={scrollToTop} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
