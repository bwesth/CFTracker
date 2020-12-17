import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import treepic from "../../../Shared/Images/Graphs/TreesCount.png";

export default () => {
  const userFootprint = useContext(UserContext).footprint[0];
  const treesSaved = Math.floor(userFootprint.total.pledgeTotal * 5);
  const squareTrees = Math.floor(treesSaved / 5);

  return (
    <div className="slide">
      <div className="treeSlide">
        <img src={treepic} alt="A forest of illustrated trees." />

        <div className="chartInfo">
          <h2>Trees</h2>
          <p>{treesSaved} trees saved</p>
          <p>by your actions so far</p>
          <p>That's {squareTrees} square meters of forest!</p>
        </div>
      </div>
    </div>
  );
};
