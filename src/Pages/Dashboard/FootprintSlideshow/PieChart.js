import React, { useContext } from "react";
import { VictoryPie } from "victory";
import { UserContext } from "../../../Main/UserContext";

export default () => {
  const footprint = useContext(UserContext).footprint[0]
  return (
    <div className="slide">
      <div className="pieSlide">
        <VictoryPie
          colorScale={["#53AED5", "#02C39A", "#F46A67", "#FFE15B"]}
          data={[
            { x: "Transport", y: footprint.transport },
            { x: "HouseHold", y: footprint.household },
            { x: "Goods", y: footprint.goods },
            { x: "Food", y: footprint.food },
          ]}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#ffff",
              strokeWidth: 3,
            },
            labels: { fontSize: 25, fill: "#48484" },
          }}
        />
      </div>
      <div className="values">
        <h2>Spending by Category:</h2>
        <div className="valueText">
          <div className="box1">
            <div id="travelValue">
              <h4>{footprint.transport}</h4> <p>tonnes on transport</p>
            </div>
            <div id="householdValue">
              <h4>{footprint.household}</h4> <p>tonnes on household</p>
            </div>
          </div>
          <div className="box2">
            <div id="goodsValue">
              <h4>{footprint.goods}</h4> <p>tonnes on stuff</p>
            </div>
            <div id="foodValue">
              <h4>{footprint.food}</h4> <p>tonnes on food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
