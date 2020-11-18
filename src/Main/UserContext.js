import React, { useEffect, useState } from "react";
import firebase from "../components/Firebase/firebase";
import data from "../Data/survey";
console.log(data.themes[0].options[4].value);
const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const loggedIn = useState(false);
  const surveyChoices = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  const pledges = useState([]);
  const footprint = useState();

  function calcFootprint() {
    let result = 0;
    for (let i = 0; i < data.themes.length; i++) {
      result += data.themes[i].options[surveyChoices[0][i]].value;
    }
    console.log(result);
    return result;
  }

  useEffect(() => {
    footprint[1](calcFootprint());
  }, surveyChoices);

  return (
    <UserContext.Provider
      value={{
        user,
        surveyChoices,
        pledges,
        footprint,
        firebase,
        loggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
