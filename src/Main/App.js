import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserContext } from "./UserContext";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function App() {
  const loggedIn = useContext(UserContext).loggedIn[0]
  const [display, setDisplay] = useState();

  useEffect(() => {
    setDisplay(<Frontpage setDisplay={setDisplay} />);
  }, []);

  return (
    <div className="App">
      <Header />
      {loggedIn ? <Dashboard /> : display}
      <Footer />
    </div>
  );
}

export default App;
