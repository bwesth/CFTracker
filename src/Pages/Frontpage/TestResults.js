import React from "react";
import PopupWrapper from "./PopupWrapper";
import SignUpForm from "./SignUpForm";
import surveyData from "../../Data/survey";
import SignUpButton from "./SignUpButton";

export default (props) => {
  const th = surveyData.themes;
  const data = th.map((i) => [...i.questions]);

  console.log(data);

  return (
    <>
      <h1>These are your test results:</h1>
      {props.data}
      <PopupWrapper trigger={<SignUpButton />}>
        <SignUpForm />
      </PopupWrapper>
    </>
  );
};
