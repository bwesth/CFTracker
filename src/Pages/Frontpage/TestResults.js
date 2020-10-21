import React, { useContext } from "react";
import { UserContext } from "../../Main/UserContext";
import Frontpage from "./Frontpage";
import data from "../../Data/intensityKilo";
import ResultBar from "./ResultBar";

export default (props) => {

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
