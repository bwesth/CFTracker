import React, { useState, useEffect } from "react";
import "./App.css";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserProvider } from "./UserContext";

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
    setDisplay(<Frontpage setDisplay={setDisplay} />);
    //setDisplay(<Dashboard />);
  }, []);

  return <UserProvider className="App">{display}</UserProvider>;
}

export default App;
