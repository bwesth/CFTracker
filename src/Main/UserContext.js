import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined })
  const surveyChoices = useState({Transport: "Car", Food: "Omnivore"})


  return (
    <UserContext.Provider value={{ user, surveyChoices }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
