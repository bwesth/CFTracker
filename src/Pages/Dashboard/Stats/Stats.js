import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import Wrapper from "../../../Shared/Wrapper/Wrapper";


export default () => {
  const userFootprint = useContext(UserContext).footprint[0];

  return (
    <Wrapper>
      <div className="stats">
        <div id="AMOandSIM">
          <div id="AMO">
            <h2>Average Yearly Output</h2> 
            <h4>{Math.floor(userFootprint.total.sumTotal)}</h4> 
            <p>tonnes per year</p>
          </div>
          <div id="SIM">
            <h2>Savings this Month</h2>
            <h4>{Math.floor(userFootprint.total.pledgeTotal/12)}</h4>
            <p>tonnes per month</p>
          </div>
        </div>
        <h2>If you continue with your current pledges you will save</h2>
        <h4>{userFootprint.total.pledgeTotal} tonnes per annum</h4>
        <p>(That’s {Math.floor(userFootprint.total.pledgeTotal * 5)} trees!)</p>
      </div>
    </Wrapper>
  );
};
