import React, { useState, useEffect } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserProvider } from "./UserContext";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Trees from "../Pages/Frontpage/Results/Graphs/Trees";

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
    // setDisplay(<Frontpage setDisplay={setDisplay} />);
    setDisplay(<Trees amount={12}/>);
  }, []);

  return <UserProvider className="App">
    <Header login={setDisplay} />
    {display}
    <Footer/>
  </UserProvider>;
}

export default App;
