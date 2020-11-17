import React, { useEffect, useState } from "react";
import data from '../Data/intensityKilo'

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined })
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
    <UserContext.Provider value={{ user, surveyChoices, pledges, footprint }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
