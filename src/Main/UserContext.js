import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: "nouser", email: "" }),
    wrapperClass = useState("flex-column"),
    menuPlacement = useState("menu-bottom");
  const footprint = useState({
    Car: "on",
    Omnivore: "on",
    Train: "",
    Vegan: "",
    Vegetarian: "",
    Walking_biking: "",
  });

  return (
    <UserContext.Provider value={{ user, wrapperClass, menuPlacement, footprint }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };