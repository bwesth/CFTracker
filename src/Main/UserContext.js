import React, { useEffect, useState } from "react";
import firebase from "../components/Firebase/firebase";
import data from "../Data/intensityKilo";

const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({ name: undefined, email: undefined });
  const surveyChoices = useState({
    Transport: "Car",
    Food: "Omnivore",
    Household: 16000,
    Stuff: 15,
  });
  const pledges = useState([]);
  const footprint = useState();

  function calcFootprint() {
    return {
      transport: data[surveyChoices[0].Transport.toLowerCase()],
      food: data[surveyChoices[0].Food.toLowerCase()],
      stuff: data.stuff([surveyChoices[0].Stuff]),
      household: data.household([surveyChoices[0].Household]),
      total: data[surveyChoices[0].Transport.toLowerCase()]+data[surveyChoices[0].Food.toLowerCase()]+data.stuff([surveyChoices[0].Stuff])+data.household([surveyChoices[0].Household])
    };
  }

  useEffect(() => {
    footprint[1](calcFootprint());
  }, surveyChoices);

  return (
    <UserContext.Provider
      value={{ user, surveyChoices, pledges, footprint, firebase }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
