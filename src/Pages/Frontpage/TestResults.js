import React, { useContext } from "react";
import PopupWrapper from "./PopupWrapper";
import SignUpForm from "./SignUpForm";
import SignUpButton from "./SignUpButton";
import { UserContext } from "../../Main/UserContext";
import Frontpage from "./Frontpage";
import data from "../../Data/intensityKilo";
import ResultBar from "./ResultBar";
import Dashboard from "../Dashboard/Dashboard";

export default (props) => {
  // const footprint = useContext(UserContext).footprint[0];
  // console.log(footprint);

  // const userValue =
  //   (footprint.Car === "on" ? car() : 0) +
  //   (footprint.Train === "on" ? train() : 0) +
  //   (footprint.Walking_biking === "on" ? walking_biking() : 0) +
  //   (footprint.Omnivore === "on" ? meateater() : 0) +
  //   (footprint.Vegetarian === "on" ? vegetarian() : 0) +
  //   (footprint.Vegan === "on" ? vegan() : 0);

  const footprint = useContext(UserContext).surveyChoices[0];


  const userValue =
    data[footprint.Transport.toLowerCase()] +
    data[footprint.Food.toLowerCase()]

  return (
    <div className="center ">
      <h1>These are your test results:</h1>
      <ResultBar name={"Average Citizen"} value={14800} />
      <ResultBar name={"Your Footprint"} value={userValue} />
      <ResultBar name={"Save the world"} value={17000 * 0.3} />
      <div>
        {props.popup}
        <button
          onClick={() => {
            props.setDisplay(<Frontpage setDisplay={props.setDisplay} />);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
