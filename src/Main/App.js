import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { UserContext, UserProvider } from "./UserContext";
import TestResults from "../Pages/Frontpage/Results/TestResults";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

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
  const user = useContext(UserContext).user[0]
  const [display, setDisplay] = useState();

  useEffect(() => {
    // setDisplay(<TestResults setDisplay={setDisplay} />);
    // setDisplay(<Dashboard />);
    setDisplay(<Frontpage setDisplay={setDisplay} />);
  }, []);

  return <div className="App">
    <Header />
    {user.name ? <Dashboard /> : display}
    <Footer/>
  </div>;
}

export default App;
