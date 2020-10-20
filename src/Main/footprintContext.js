import { meateater, vegetarian, vegan } from "./Data/intensityKilo";
console.log(meateater());
console.log(vegetarian());
console.log(vegan());

import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: "nouser", email: "" }),
    wrapperClass = useState("flex-column"),
    menuPlacement = useState("menu-bottom");

  return (
    <UserContext.Provider value={{ user, wrapperClass, menuPlacement }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
