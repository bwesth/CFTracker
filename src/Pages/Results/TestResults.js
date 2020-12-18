import React, { useEffect } from "react";
import Frontpage from "../Frontpage/Frontpage";
import Wrapper from "../../Shared/Wrapper/Wrapper";
import Description from "./Description";
import { Link } from "react-router-dom";

//Doesn't seem to be a consensus in our group between hard-coding data and putting it elsewhere.
import { first, second, third, fourth } from "./text";
//Geez these image imports are a nightmare! Is there a better way to do this???
import treeimage from "../../Shared/Images/Graphs/TreesCount.png";

//Chart imports
import BarChart from "../Dashboard/FootprintSlideshow/BarChart";
import PieChart from "../Dashboard/FootprintSlideshow/PieChart";
import TreeChart from "../Dashboard/FootprintSlideshow/TreeChart";
import PopupWrapper from "../Frontpage/PopupWrapper";
import SignUpForm from "../Frontpage/SignUpForm";

export default ({ scrollToTop }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="results-main">
      <h1>Let’s see how you did!</h1>
      <div className="wrapper-Holder">
        <Wrapper>
          {/* The barchart class below is a bar chart that displays the user CO2 output compared to other common citizens. */}
          <BarChart />
        </Wrapper>
        <Wrapper>
          {/* Pie chart breakdown of C02 here, currently not hooked up to the correct numbers. */}
          <PieChart pieStats={false} />
          <Description>
            <h1>{second.headline}</h1>
            <p>{second.text1}</p>
            <p>{second.text2}</p>
          </Description>
        </Wrapper>
        <Wrapper>
          <TreeChart resultVersion={true} />
          <Description>
            <h1>{third.headline}</h1>
            <p>{third.text1}</p>
          </Description>
        </Wrapper>
        <Wrapper>
          <Description>
            <div className="endText">
              {/* Here's our signup area, currently there are two buttons here, of different sizes. :P Needs fixing! */}
              <p>{fourth.text1}</p>
              {/* Is this the signup button? I have no clue whats happening here. */}

              <div className="resultButtons">
                <PopupWrapper
                  trigger={
                    <button className="testButton">
                      <h3>SIGN UP</h3>
                    </button>
                  }
                >
                  <SignUpForm />
                </PopupWrapper>
                <Link to="/" className="backButton">
                  BACK
                </Link>
                {/* <button
                  className="backButton"
                  onClick={() => {
                    setDisplay(
                      <Frontpage
                        setDisplay={setDisplay}
                        scrollToTop={scrollToTop}
                      />
                    );
                  }}
                >
                  BACK
                </button> */}
              </div>
              <p>{fourth.text2}</p>
            </div>
          </Description>
        </Wrapper>
      </div>
    </div>
  );
};
