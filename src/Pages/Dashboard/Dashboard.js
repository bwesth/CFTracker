import Stats from "./Stats/Stats";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Main/UserContext";
import FootprintSlideshow from "./FootprintSlideshow/FootprintSlideshow";
import Pledges from "./Pledges/Pledges";
import PledgesPage from "../PledgesPage/PledgesPage";

export default ({ scrollToTop }) => {
  const [pledgesRender, setpledgesRender] = useState(false);
  const fb = useContext(UserContext).firebase;
  const [pledges, setPledges] = useContext(UserContext).pledges;
  const updateFootprint = useContext(UserContext).updateFootprint;
  const [surveyChoices, setSurveyChoices] = useContext(UserContext).surveyChoices;

  useEffect(() => {
    updateFootprint();
    scrollToTop();
  }, [pledgesRender]);

  useEffect(() => {
    updateUserData();
    console.log(pledges)
    console.log(surveyChoices)
  }, [pledges]);

  async function updateUserData() {
    await fb.setUserData({pledges: pledges, surveyChoices: surveyChoices});
  }

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
        </>
      )}
    </div>
  );
};
