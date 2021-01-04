import React, { useEffect, useRef, useState } from "react";
import Survey from "./Survey/Survey";
import surveyData from "../../Data/survey";
import SignUpForm from "./SignUpForm";
import PopupWrapper from "./PopupWrapper";

export default ({ scrollToTop }) => {
  const [surveyVisible, setSurveyVisible] = useState(false);
  const surveyRef = useRef(null);
  const surveyClick = () => {
    setSurveyVisible((prevState) => !prevState);
  };

  useEffect(() => {
    surveyVisible
      ? surveyRef.current.scrollIntoView({ behavior: "smooth" })
      : scrollToTop();
  }, [surveyVisible]);

  return (
    <>
      <div className="welcoming">
        <div className="mission">
          <h1>Change The Future</h1>
          <p>
            There is now no doubt that climate change will have a profound
            effect on our future.
          </p>
          <p>Help us to save the planet, one person at a time.</p>
        </div>
        <div className="middelBox">
          <h1>Become The Solution</h1>
          <p>
            We believe every individual can help in the fight against climate
            change.<br></br>
            Any contribution counts!<br></br>
            Even the smallest changes you make today will add up over time.
            <br></br>
            Take the survey below so we can get a ballpark figure of your
            emissions.
          </p>
          <div className="buttonBox">
            <button className="testButton" onClick={() => surveyClick()}>
              <h3>Test your CO₂ footprint!</h3>
            </button>
            <p>Or</p>
            <PopupWrapper
              trigger={
                <button className="testButton">
                  <h3>SIGN UP</h3>
                </button>
              }
            >
              <SignUpForm />
            </PopupWrapper>
          </div>
        </div>
      </div>
      {surveyVisible && (
        <div ref={surveyRef}>
          <Survey themes={surveyData.themes} scrollToTop={scrollToTop} />
        </div>
      )}
    </>
  );
};
