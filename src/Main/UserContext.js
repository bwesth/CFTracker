import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: "nouser", email: "" }),
    wrapperClass = useState("flex-column"),
    menuPlacement = useState("menu-bottom");
  const surveyChoices = useState({Transport: "Car", Food: "Omnivore"})

  return (
    <UserContext.Provider value={{ user, wrapperClass, menuPlacement, surveyChoices }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
