import React, { useContext, useEffect } from "react";
import Pledge from "../Dashboard/Pledges/Pledge";
import { UserContext } from "../../Main/UserContext";

export default ({ section }) => {
  const context = useContext(UserContext);
  const [pledges, setPledgesList] = context.pledges;
  const list = pledges[section.name.toLowerCase()];

  function addPledge(pledgeIndex) {
    setPledgesList((state) => ({
      ...state,
      [section.name.toLowerCase()]: [...list, pledgeIndex],
    }));
  }

  useEffect(() => {
    context.updateFootprint();
  }, [pledges]);

  return (
    <div className="pledgesSection">
      <h1>{section.name}</h1>
      {section.list.map(
        (pledge, index) =>
          !list.includes(index) && (
            <Pledge pledge={pledge} index={index} addPledge={addPledge} />
          )
      )}
    </div>
  );
};
