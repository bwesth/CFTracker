import React, { useContext } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Pledge from "./Pledge";
import { UserContext } from "../../../Main/UserContext";

export default ({ pledgesRender }) => {
  const pledgesList = useContext(UserContext).pledges[0];

  console.log(pledgesList);

  let pledges = pledgesList.map((pledge) => <Pledge pledge={pledge} />);

  return (
    <Wrapper direction="column">
      <div className="pledges">{pledges}</div>
      <div
        className="pledge-button"
        onClick={() => pledgesRender((state) => !state)}
      >
        <p> + Add More Pledges </p>
      </div>
    </Wrapper>
  );
};
