import React, { useState } from 'react';
import './App.css';
import Frontpage from '../Greeting screen/Frontpage';
import Dashboard from '../Dashboard/Dashboard'

function App() {

  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className="App">
        {loggedIn ? <Dashboard /> : <Frontpage login={setLoggedIn}/> }
    </div>
  );
}

export default App;
