import React, { useEffect } from "react";
import PledgesSection from "./PledgesSection";
import pledgesStore from "../../Data/pledgesStore";
import { Link } from "react-router-dom";

export default ( { scrollToTop } ) => {

  useEffect(() => {
    scrollToTop()
  },[])

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
