import React from "react";
import Frontpage from "../Frontpage";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Description from "./Description";

import { first, second, third, fourth } from "./text";

import BarChart from "../../Dashboard/FootprintSlideshow/BarChart";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
};

export default (props) => {
  return (
    <div className="results-main" style={style}>
      <h1>Let’s see how you did!</h1>
      <div style={style}>
        <Wrapper>
          <BarChart/>
          {/* <FootprintBars /> */}
          <Description>
            {/* <h1>{first.headline}</h1> */}
            {/* <p>{first.text1}</p> */}
            {/* <p>{first.text2}</p> */}
          </Description>
        </Wrapper>
        <Wrapper>
        {/* Insert Pie Chart Here */}
          <Description>
            <h1>{second.headline}</h1>
            <p>{second.text1}</p>
            <p>{second.text2}</p>
          </Description>
        </Wrapper>
        <Wrapper>
        {/* Insert trees here */}
          <Description>
            <h1>{third.headline}</h1>
            <p>{third.text1}</p>
            <p>{third.text2}</p>
          </Description>
        </Wrapper>
        <Wrapper>
          <Description>
            <p>{fourth.text1}</p>
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
            <p>{fourth.text2}</p>
          </Description>
        </Wrapper>
      </div>
    </div>
  );
};
