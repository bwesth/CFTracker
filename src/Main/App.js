import React, { useState, useEffect } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserProvider } from "./UserContext";
import ResultsSection from "../Pages/Frontpage/Results/ResultsSection";
import Chart1 from "../Pages/Frontpage/Results/First/Chart";
import Description1 from "../Pages/Frontpage/Results/First/Description";
import Chart2 from "../Pages/Frontpage/Results/Second/Chart";
import Description2 from "../Pages/Frontpage/Results/Second/Description";
import Chart3 from "../Pages/Frontpage/Results/Third/Chart";
import Description3 from "../Pages/Frontpage/Results/Third/Description";
import TestResults from "../Pages/Frontpage/TestResults";

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

  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };

  useEffect(() => {
    setDisplay(
      <TestResults />
    );
    // setDisplay(<Dashboard />);
  }, []);

  return <UserProvider className="App">{display}</UserProvider>;
}

export default App;
