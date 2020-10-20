//Deprecated!!!

import { car, meateater } from "../Data/intensityKilo";

import React, { useState } from "react";

const FootprintContext = React.createContext();

function FootprintProvider(props) {
  const footprint = useState({
    Car: "on",
    Omnivore: "on",
    Train: "",
    Vegan: "",
    Vegetarian: "",
    Walking_biking: "",
  });

  return (
    <FootprintContext.Provider value={{ footprint }}>
      {props.children}
    </FootprintContext.Provider>
  );
}

export { FootprintProvider, FootprintContext };
