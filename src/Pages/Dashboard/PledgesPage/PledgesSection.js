import React, {useContext} from "react";
import Pledge from "../Pledges/Pledge";
import { UserContext } from "../../../Main/UserContext";

export default ({ section }) => {
  const [pledgesList, addPledge] = useContext(UserContext).pledges

  return (
    <div className="pledgesSection">
      <h1>{section.name}</h1>
      {section.list.map((pledge) => (!pledgesList.includes(pledge) &&
        <Pledge pledge={pledge} addPledge={addPledge}/>
      ))}
    </div>
  );
};
