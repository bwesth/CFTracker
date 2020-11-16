import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import PledgesSection from "./PledgesSection";
import pledgesStore from '../../../Data/pledgesStore'
import banner from '../../../Shared/Images/Banner_Illustrations/Banner_001.jpg'

export default ({ setpledgesRender }) => {
    console.log(pledgesStore)
  return (
    <div>
          <div className="banner">
            <h1>Pledges</h1>
          </div>
        <div>
            {pledgesStore.map((section) => <PledgesSection section={section}/>)}
        </div>
      <button onClick={() => setpledgesRender((state) => !state)}>BACK</button>
      <div style={{height: "100px"}}></div>
    </div>
  );
};
