import React, { useState } from 'react';
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

  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <UserProvider className="App" >
        {loggedIn ? <Dashboard /> : <Frontpage login={setLoggedIn}/> }
    </UserProvider>
  );
}

export default App;
