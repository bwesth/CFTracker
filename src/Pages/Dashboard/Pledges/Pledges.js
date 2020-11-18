import React, { useContext } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Pledge from "./Pledge";
import { UserContext } from "../../../Main/UserContext";

export default ({ pledgesRender }) => {
  const pledges = useContext(UserContext).pledges[0];


  let transportPledges = pledges.transport.map((pledge) => <Pledge pledge={pledge} />),
  foodPledges = pledges.food.map((pledge) => <Pledge pledge={pledge} />),
  goodsPledges = pledges.goods.map((pledge) => <Pledge pledge={pledge} />),
  householdPledges = pledges.household.map((pledge) => <Pledge pledge={pledge} />)

  return (
    <Wrapper direction="column">
      <h1>Transportation</h1>
      <div className="pledges">{transportPledges}</div>
      <h1>Food</h1>
      <div className="pledges">{foodPledges}</div>
      <h1>Goods</h1>
      <div className="pledges">{goodsPledges}</div>
      <h1>Household</h1>
      <div className="pledges">{householdPledges}</div>
      <div
        className="pledge-button"
        onClick={() => pledgesRender((state) => !state)}
      >
        <p> + Add More Pledges </p>
      </div>
    </Wrapper>
  );
};
