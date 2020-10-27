import React from "react";
import Header from "../../Shared/Header";
import Survey from "./Survey/Survey";
import surveyData from "../../Data/survey";
import SignUpForm from "./SignUpForm";
import PopupWrapper from "./PopupWrapper";

export default (props) => {
  const signUp = () => {
    alert("Sign up function needed");
  };

  const login = () => {
    alert("Login function needed");
  };

  const surveyClick = () => {
    const element = document.getElementsByClassName("survey")[0];
    element.style.display = "flex";
    element.scrollIntoView({ behavior: "smooth" });
  };

  const popup = (
    <PopupWrapper trigger={<button className="testButton"><h3>SIGN UP</h3></button>}>
      <SignUpForm />
    </PopupWrapper>
  );

  return (
    <>
      <div id="welcoming">
        <Header login={props.setDisplay} />
        <h1 className="mission">The mission statement goes here</h1>
        {popup}
        <p className="centered">Or</p>
        <button className="testButton" onClick={() => surveyClick()}>
          <h3>Test your CO₂ footprint!</h3>
        </button>
      </div>
      <Survey
        setDisplay={props.setDisplay}
        popup={popup}
        themes={surveyData.themes}
      />
    </>
  );
};
