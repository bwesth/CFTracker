import React from "react";
import Frontpage from "../Frontpage";
import SignUpButton from "../SignUpButton";

import FootprintBars from "../../../Shared/FootprintBars";

import ResultsSection from "./ResultsSection";
import Description from "./Description";
import Chart from "./Chart";

import { first, second, third, fourth } from "./text";

import chart2 from "./img/1200px-English_dialects1997.svg.png";
import chart3 from "./img/trees.png";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
};

export default (props) => {
  return (
    <div style={style}>
      <h1>Let’s see how you did!</h1>
      <div style={style}>
        <ResultsSection>
          <FootprintBars />
          <Description>
            <h1>{first.headline}</h1>
            <p>{first.text1}</p>
            <p>{first.text2}</p>
          </Description>
        </ResultsSection>
        <ResultsSection>
          <Chart img={chart2} />
          <Description>
            <h1>{second.headline}</h1>
            <p>{second.text1}</p>
            <p>{second.text2}</p>
          </Description>
        </ResultsSection>
        <ResultsSection>
          <Chart img={chart3} />
          <Description>
            <h1>{third.headline}</h1>
            <p>{third.text1}</p>
            <p>{third.text2}</p>
          </Description>
        </ResultsSection>
        <ResultsSection>
          <Description>
            <p>{fourth.text1}</p>
            <div>
              <SignUpButton />
              <button
                onClick={() => {props.setDisplay(<Frontpage setDisplay={props.setDisplay} />);}}>
                Back
              </button>
            </div>
            <p>{fourth.text2}</p>
          </Description>
        </ResultsSection>
      </div>
    </div>
  );
};
