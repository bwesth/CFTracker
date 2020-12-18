import React, { useState, useEffect, useContext, useRef } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserContext } from "./UserContext";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  /* const loggedIn = useContext(UserContext).loggedIn[0];
  const [display, setDisplay] = useState();
  const headerRef = useRef(null);

  function scrollToTop() {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    console.log(headerRef);
  }, [headerRef]); */

  /*   useEffect(() => {
    setDisplay(<Frontpage setDisplay={setDisplay} scrollToTop={scrollToTop} />);
  }, []); */

  /*  return (
    <div className="App">
      <div ref={headerRef}>
        <Header />
      </div>
      {loggedIn ? <Dashboard scrollToTop={scrollToTop} /> : display}
      <Footer />
    </div>
  ); */
  const loggedIn = useContext(UserContext).loggedIn[0];
  const headerRef = useRef(null);
  function scrollToTop() {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    console.log(headerRef);
  }, [headerRef]);
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
            exact
            path="/dashboard"
            render={(props) => {
              return loggedIn ? (
                <Dashboard {...props} scrollToTop={scrollToTop} />
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
