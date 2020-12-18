import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import Wrapper from "../../../Shared/Wrapper/Wrapper";

export default () => {
  const userFootprint = useContext(UserContext).footprint[0];

  return (
    <Wrapper>
      <div className="stats">
        <div className="AverageYearlyOutput_and_SavingsThisMonth">
          <div className="AverageYearlyOutput">
            <h2>Average Yearly Output</h2>
            <h4>{Math.round(userFootprint.total.sumTotal)}</h4>
            <p>tonnes per year</p>
          </div>
          <div className="SavingsThisMonth">
            <h2>Savings this Month</h2>
            <h4>{Math.round(userFootprint.total.pledgeTotal / 12)}</h4>
            <p>tonnes per month</p>
          </div>
        </div>
        <h2>If you continue with your current pledges you will save</h2>
        <h4>{Math.round(userFootprint.total.pledgeTotal)} tonnes per annum</h4>
        <p>(That’s {Math.round(userFootprint.total.pledgeTotal * 5)} trees!)</p>
      </div>
    </Wrapper>
  );
};
