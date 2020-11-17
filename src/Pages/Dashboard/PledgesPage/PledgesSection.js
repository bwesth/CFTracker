import React, {useContext} from "react";
import Pledge from "../Pledges/Pledge";
import { UserContext } from "../../../Main/UserContext";

export default ({ section }) => {
  const context = useContext(UserContext)

  const [pledgesList, setPledgesList] = context.pledges,
  setFootprint = context.footprint[1]

  console.log("Footprint: "+context.footprint[0])

  function addPledge (pledge) {
    setPledgesList(list => [...list, pledge])
    setFootprint(value => value-(pledge.tonnes*1000))
  }

  return (
    <div className="pledgesSection">
      <h1>{section.name}</h1>
      {section.list.map((pledge) => (!pledgesList.includes(pledge) &&
        <Pledge pledge={pledge} addPledge={addPledge}/>
      ))}
    </div>
  );
};
