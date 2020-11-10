import React from "react";
import Frontpage from "./Frontpage";

import FootprintBars from "../../Shared/FootprintBars"

export default (props) => {

  return (
    <div className="center ">
      <h1>These are your test results:</h1>
      <FootprintBars />
      <div>
        <ResultsSection>
          <Chart1 />
          <Description1 />
        </ResultsSection>
        <ResultsSection>
          <Chart2 />
          <Description2 />
        </ResultsSection>
        <ResultsSection>
          <Chart3 />
          <Description3 />
        </ResultsSection>
      </div>
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
