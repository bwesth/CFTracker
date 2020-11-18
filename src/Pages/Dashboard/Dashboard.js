import Stats from "./Stats/Stats";
import React, { useContext, useState } from "react";
import { UserContext } from "../../Main/UserContext";
import FootprintSlideshow from "./FootprintSlideshow/FootprintSlideshow";
import Pledges from "./Pledges/Pledges";
import PledgesPage from "./PledgesPage/PledgesPage";

export default () => {
  const [pledgesRender, setpledgesRender] = useState(false);
  const fb = useContext(UserContext).firebase;

  return (
    <div className="dashboard">
      {pledgesRender ? (
        <PledgesPage setpledgesRender={setpledgesRender} />
      ) : (
        <>
          <div className="banner">
            <h2>Hello {fb.getCurrentUsername()}</h2>
            <h1>Your Climate Actions</h1>
          </div>
          <h3>Your Carbon Expenditure</h3>
          <Stats />
          <FootprintSlideshow />
          <h3>Your Pledges</h3>
          <Pledges pledgesRender={setpledgesRender} />
          <div style={{ height: "100px" }}></div>
        </>
      )}
    </div>
  );
};
