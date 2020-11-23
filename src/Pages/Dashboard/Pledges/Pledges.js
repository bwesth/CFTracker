import React, { useContext } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Pledge from "./Pledge";
import { UserContext } from "../../../Main/UserContext";

export default ({ pledgesRender }) => {
  const pledges = useContext(UserContext).pledges[0];


  let transportPledges = pledges.transport.map((pledge) => <Pledge pledge={pledge} />)
  let foodPledges = pledges.food.map((pledge) => <Pledge pledge={pledge} />)
  let goodsPledges = pledges.goods.map((pledge) => <Pledge pledge={pledge} />)
  let householdPledges = pledges.household.map((pledge) => <Pledge pledge={pledge} />)

  return (
    <Wrapper direction="column">
      { (transportPledges.length <1 && foodPledges.length <1 && goodsPledges.length <1 && householdPledges.length <1) ? 
      <><h1>You have no pledges yet!</h1>
      <p>Click the button to see the pledges you can make</p></> : <>  
        {transportPledges.length > 0 && <>
          <h1>Transportation</h1>
          <div className="pledges">{transportPledges}</div>
          </>}
      {foodPledges.length > 0 && <>
        <h1>Food</h1>
        <div className="pledges">{foodPledges}</div>
        </>}
      {goodsPledges.length > 0 && <>
        <h1>Goods</h1>
        <div className="pledges">{goodsPledges}</div>
        </>}
      {householdPledges.length > 0 && <>
        <h1>Household</h1>
        <div className="pledges">{householdPledges}</div>
        </>}
      </>}
      <div
      className="pledge-button"
        onClick={() => pledgesRender((state) => !state)}
      >
        <p> + Add More Pledges </p>
      </div>
    </Wrapper>
  );
};
