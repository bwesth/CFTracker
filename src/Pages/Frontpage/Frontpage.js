import React from "react";
import Header from "../../Shared/Header";
import Survey from "./Survey/Survey";
import surveyData from "../../Data/survey";
import SignUpForm from "./SignUpForm";
import PopupWrapper from "./PopupWrapper";

export default (props) => {
  // const signUp = () => {
  //   alert("Sign up function needed");
  // };

  // const login = () => {
  //   alert("Login function needed");
  // };

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
        <h1 className="mission">Change the future.</h1>
        <p>There is now no doubt that climate change will have a profound effect on our future.</p>
          <p>Help us save the planet, one person at a time</p>
        <div className="middelBox">
          <h1>Become The Solution</h1>
          <p>We believe every individual can help in the fight against climate change.<br></br>
            Any contribution counts!<br></br>
            Take the test below to discover your carbon footprint.</p>
          <div id="buttonBox">
            <button className="testButton" onClick={() => surveyClick()}>
            <h3>Test your CO₂ footprint!</h3>
            </button>
            <p >Or</p>
            {popup}
          </div>
        </div>
      </div>
      <Survey
        setDisplay={props.setDisplay}
        popup={popup}
        themes={surveyData.themes}
      />
    </>
  );
};
