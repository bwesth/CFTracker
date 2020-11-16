import React from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";

export default () => {
  /* ToDo:  
    const Average Monthly Output =
    const Savings this Month = 
    const If you continue with your current pledges you will save =
    */
  return <Wrapper>
    <div className="stats">
      <div id="AMOandSIM">
        <div id="AMO">
        <h2>Average Monthly Output</h2> <h4>6.5</h4> <p>tonnes per month</p>
        </div>
        <div id="SIM">
          <h2>Savings this Month</h2><h4>1.1</h4><p>If you continue with your current pledges you will save</p>
        </div>
      </div>
      <h2>If you continue with your current pledges you will save</h2>
      <h4>13.2 tonnes per annum</h4>
      <p>(That’s 500 trees!)</p>
      </div>
  </Wrapper>;
  
};
