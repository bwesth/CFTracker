import React, { useContext, useEffect } from "react";
import PledgesSection from "./PledgesSection";
import pledgesStore from "../../Data/pledgesStore";
import { Link } from "react-router-dom";
import { UserContext } from "../../Main/UserContext";

export default ({ scrollToTop }) => {
  const fb = useContext(UserContext).firebase;
  const [userPledges, setPledges] = useContext(UserContext).pledges;
  const [userSurvey, setSurveyChoices] = useContext(UserContext).surveyChoices;

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    updateUserData();
  }, [userPledges]);

  async function updateUserData() {
    await fb.setUserData({ pledges: userPledges, surveyChoices: userSurvey });
  }

  return (
    <div className="pledgesPages">
      <div className="pledgeBanner">
        <h1>Pledges</h1>
      </div>

      {pledgesStore.map((section) => (
        <PledgesSection section={section} />
      ))}
      <Link to="/"> BACK </Link>
      {/* <button
        id="backButton"
        onClick={() => setpledgesRender((state) => !state)}
      >
        BACK
      </button> */}
    </div>
  );
};
