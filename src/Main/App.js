import React, { useState, useEffect } from 'react';
import './App.css';
import Frontpage from '../Greeting screen/Frontpage';
import Dashboard from '../Dashboard/Dashboard'
import { UserProvider } from './UserContext';

// Dependencies
// npm install reactjs-popup 
// https://www.npmjs.com/package/reactjs-popup

// npm install yup
// https://www.npmjs.com/package/yup

// npm install react-hook-form
// npm install @hookform/resolvers
// https://react-hook-form.com/api/


function App() {

  const [loggedIn,setLoggedIn] = useState(false),
  [display, setDisplay] = useState()

  useEffect (() => {
    setDisplay(<Frontpage setDisplay={setDisplay} />)
  },[])

  return (
    <UserProvider className="App" >
        { display }
    </UserProvider>
  );
}

export default App;
