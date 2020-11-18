import React from "react";
import PledgesSection from "./PledgesSection";
import pledgesStore from "../../../Data/pledgesStore";

export default ({ setpledgesRender }) => {
  console.log(pledgesStore);
  return (
    <div>
      <div className="banner">
        <h1>Pledges</h1>
      </div>
      <div>
        {pledgesStore.map((section) => (
          <PledgesSection section={section} />
        ))}
      </div>
      <button onClick={() => setpledgesRender((state) => !state)}>BACK</button>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};
