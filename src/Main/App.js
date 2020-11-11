import React, { useState, useEffect } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserProvider } from "./UserContext";
import TestResults from "../Pages/Frontpage/Results/TestResults";
import Header from "../Shared/Header";

// Dependencies
// npm install reactjs-popup
// https://www.npmjs.com/package/reactjs-popup

// npm install yup
// https://www.npmjs.com/package/yup

// npm install react-hook-form
// npm install @hookform/resolvers
// https://react-hook-form.com/api/

// npm install js-yaml
// npm install fs
function App() {
  // const [loggedIn, setLoggedIn] = useState("");
  const [display, setDisplay] = useState();

  useEffect(() => {
    // setDisplay(<TestResults setDisplay={setDisplay} />);
    // setDisplay(<Dashboard />);
    setDisplay(<Frontpage setDisplay={setDisplay} />);
  }, []);

  return <UserProvider className="App">
    <Header login={setDisplay} />
    {display}
  </UserProvider>;
}

export default App;
