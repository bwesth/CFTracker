import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import PledgesSection from "./PledgesSection";
import pledgesStore from '../../../Data/pledgesStore'

export default ({ setpledgesRender }) => {
    console.log(pledgesStore)
  return (
    <div>
        <div>
            {pledgesStore.map((section) => <PledgesSection section={section}/>)}
        </div>
      <button onClick={() => setpledgesRender((state) => !state)}>BACK</button>
    </div>
  );
};
