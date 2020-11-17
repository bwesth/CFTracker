import Stats from "./Stats/Stats";
import React, { useContext, useState } from "react";
import { UserContext } from "../../Main/UserContext";
import FootprintSlideshow from "./FootprintSlideshow.js/FootprintSlideshow";
import Pledges from "./Pledges/Pledges";
import PledgesPage from './PledgesPage/PledgesPage'

export default () => {
  const [user, setUsername] = useContext(UserContext).user;
  const [pledgesRender, setpledgesRender] = useState(false);

  console.log(pledgesRender)
  return (
    <div className="dashboard">
      {pledgesRender ? (
        <PledgesPage setpledgesRender={setpledgesRender}/>
      ) : (
        <>
          <div className="banner">
            <h1>Your Climate Actions</h1>
          </div>
          <h3>Your Carbon Expenditure</h3>
          <Stats />
          <FootprintSlideshow />
          <h3>Your Pledges</h3>
          <Pledges pledgesRender={setpledgesRender}/>
          <div style={{ height: "100px" }}></div>
        </>
      )}
    </div>
  );
};
