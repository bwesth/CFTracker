import React from "react";
import PledgesSection from "./PledgesSection";
import pledgesStore from "../../../Data/pledgesStore";

export default ({ setpledgesRender }) => {
  return (
    <div className="pladgesPages"> 
      <div className="pladgeBanner">
        <h1>Pledges</h1>
      </div>
      
        {pledgesStore.map((section) => (
          <PledgesSection section={section} />
        ))}
      
      <button id="backButton" onClick={() => setpledgesRender((state) => !state)}>BACK</button>
    </div>
  );
};
