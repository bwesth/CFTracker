import React from "react";
import Frontpage from "../Frontpage";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Description from "./Description";

//Doesn't seem to be a consensus in our group between hard-coding data and putting it elsewhere.
import { first, second, third, fourth } from "./text";
//Geez these image imports are a nightmare! Is there a better way to do this???
import treeimage from "../../../Shared/Images/Graphs/TreesCount.png";

//Chart imports
import BarChart from "../../Dashboard/FootprintSlideshow/BarChart";
import PieChart from "../../Dashboard/FootprintSlideshow/PieChart";

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
          {/* The barchart class below is a bar chart that displays the user CO2 output compared to other common citizens. */}
          <BarChart/> 
          {/* <FootprintBars /> */}
          <Description>
            {/* <h1>{first.headline}</h1> */}
            {/* <p>{first.text1}</p> */}
            {/* <p>{first.text2}</p> */}
          </Description>
        </Wrapper>
        <Wrapper>
        {/* Pie chart breakdown of C02 here, currently not hooked up to the correct numbers. */}
          <PieChart/>
          <Description>
            <h1>{second.headline}</h1>
            <p>{second.text1}</p>
            <p>{second.text2}</p>
          </Description>
        </Wrapper>
        <Wrapper>
        {/* Image of trees here, currently way too large! */}
          <div>
            <img src={treeimage} alt="A forest of illustrated trees."/>
            <p>You have saved X trees</p>
          </div>
          <Description>
            <h1>{third.headline}</h1>
            <p>{third.text1}</p>
            <p>{third.text2}</p>
          </Description>
        </Wrapper>
        <Wrapper>
          <Description>
            {/* Here's our signup area, currently there are two buttons here, of different sizes. :P Needs fixing! */}
            <p>{fourth.text1}</p>
            <div>
              {/* Is this the signup button? I have no clue whats happening here. */}
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
