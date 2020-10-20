import React, { useContext } from "react";
import PopupWrapper from "./PopupWrapper";
import SignUpForm from "./SignUpForm";
import SignUpButton from "./SignUpButton";
import { UserContext } from "../../Main/UserContext";
import Frontpage from "./Frontpage";
import {
  car,
  train,
  walking_biking,
  meateater,
  vegetarian,
  vegan,
} from "../../Data/intensityKilo";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  console.log(footprint);

  function validate(val) {
    return val === "on";
  }

  const userValue =
    (footprint.Car === "on" ? car() : 0) +
    (footprint.Train === "on" ? train() : 0) +
    (footprint.Walking_biking === "on" ? walking_biking() : 0) +
    (footprint.Omnivore === "on" ? meateater() : 0) +
    (footprint.Vegetarian === "on" ? vegetarian() : 0) +
    (footprint.Vegan === "on" ? vegan() : 0);

  return (
    <>
      <h1>These are your test results:</h1>
      <p>{userValue}</p>
      <button
        onClick={() => {
          props.setDisplay(<Frontpage setDisplay={props.setDisplay} />);
        }}
      >
        Back
      </button>
      <PopupWrapper trigger={<SignUpButton />}>
        <SignUpForm />
      </PopupWrapper>
    </>
  );
};
