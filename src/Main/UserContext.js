import React, { useEffect, useState } from "react";
import firebase from "../components/Firebase/firebase";
import data from '../Data/intensityKilo'

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined, password: undefined })
  const loggedIn = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const surveyChoices = useState({Transport: "Car", Food: "Omnivore"})
  const pledges = useState([])
  
  function calcFootprint () {
  return data[surveyChoices[0].Transport.toLowerCase()] +
  data[surveyChoices[0].Food.toLowerCase()];
  }

  useEffect(() => {
    footprint[1](calcFootprint)
  }, surveyChoices)

  const footprint = useState(calcFootprint)

  return (
    <UserContext.Provider value={{ user, surveyChoices, pledges, footprint, firebase, userEmail, userName, userPassword, loggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
