import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";
import treepic from "../../../Shared/Images/Graphs/TreesCount.png";

export default ({ resultVersion }) => {
  const userFootprint = useContext(UserContext).footprint[0];
  const treesSaved = Math.floor(userFootprint.total.pledgeTotal * 5);
  const squareTrees = Math.floor(treesSaved / 5);
  const totalTreesCost = Math.floor(userFootprint.total.sumTotal * 5);

  return (
    <div className="slide">
      <div className="treeSlide">
        <img src={treepic} alt="A forest of illustrated trees." />
        {resultVersion ? (
          <p>
            In order to offset your footprint,
            <br /> you would to plant <br />
            <span className="tree-amount">{totalTreesCost}</span> trees each year.
          </p>
        ) : (
          <div className="chartInfo">
            <h2>Trees</h2>
            <p>{treesSaved} trees saved</p>
            <p>by your actions so far</p>
            <p>
              That's <span className="tree-amount">{squareTrees}</span> square
              meters of forest!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
