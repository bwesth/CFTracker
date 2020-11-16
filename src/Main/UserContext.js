import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined })
  const surveyChoices = useState({Transport: "Car", Food: "Omnivore"})
  const pledges = useState([])


  return (
    <UserContext.Provider value={{ user, surveyChoices, pledges }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
