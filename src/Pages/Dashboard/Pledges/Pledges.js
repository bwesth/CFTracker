import React from "react";
import Pledge from "./Pledge";
import pledges from "../../../Data/pledgesStore";

export default () => {
  let pledgeList = [];

  {
    for (let key in pledges) {
      pledges[key].map((item) =>
        pledgeList.push(
          <Pledge pledgename={item.name} pledgetext={item.text} img={item.img} />
        )
      );
    }
  }

  return (
    <div>
      <h1>Pledges dashboard menu</h1>
      {pledgeList}
      {/* <Pledge
        pledgename="Going Vegan"
        pledgetext="I guess bunnies aren't that tasty."
      />
      <Pledge
        pledgename="Mega Vegan"
        pledgetext="Nary a hare shall visit my tender buds."
      />
      <Pledge
        pledgename="TOTAL Vegan"
        pledgetext="Truly sire, I know not this 'meat' you speak of!"
      /> */}
    </div>
  );
};
