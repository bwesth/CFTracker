import React, { useContext } from "react";
import PopupWrapper from "./PopupWrapper";
import SignUpForm from "./SignUpForm";
import SignUpButton from "./SignUpButton";
import { UserContext } from "../../Main/UserContext";
import Frontpage from "./Frontpage";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  console.log(footprint);

  return (
    <>
      <h1>These are your test results:</h1>
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
