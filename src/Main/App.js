import React, { useState } from 'react';
import './App.css';
import Frontpage from '../Greeting screen/Frontpage';
import Dashboard from '../Dashboard/Dashboard'
import { UserProvider } from './UserContext';

function App() {

  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <UserProvider className="App" >
        {loggedIn ? <Dashboard /> : <Frontpage login={setLoggedIn}/> }
    </UserProvider>
  );
}

export default App;
