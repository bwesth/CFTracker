import React, { useState, useEffect, useContext, useRef } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserContext } from "./UserContext";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function App() {
  const loggedIn = useContext(UserContext).loggedIn[0];
  const [display, setDisplay] = useState();
  const headerRef = useRef(null);

  function scrollToTop() {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    console.log(headerRef);
  }, [headerRef]);

  useEffect(() => {
    setDisplay(<Frontpage setDisplay={setDisplay} scrollToTop={scrollToTop} />);
  }, []);

  return (
    <div className="App">
      <div ref={headerRef}>
        <Header />
      </div>
      {loggedIn ? <Dashboard scrollToTop={scrollToTop} /> : display}
      <Footer />
    </div>
  );
}

export default App;
