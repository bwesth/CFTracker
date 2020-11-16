import React, { useState } from "react";
import firebase from "../components/Firebase/firebase";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined })
  const surveyChoices = useState({Transport: "Car", Food: "Omnivore"})


  return (
    <UserContext.Provider value={{ user, surveyChoices, firebase }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
