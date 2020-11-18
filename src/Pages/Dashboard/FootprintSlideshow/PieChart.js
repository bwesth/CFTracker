import React from "react";
import { VictoryPie } from "victory";

export default () => {
  return (
    <div className="slide">
      <div className="pieSlide">
        <VictoryPie
          colorScale={["#53AED5", "#02C39A", "#F46A67", "#FFE15B"]}
          data={[
            { x: "Travel", y: 2.99 },
            { x: "HouseHold", y: 1.6 },
            { x: "Stuff", y: 1.3 },
            { x: "Food", y: 0.5 },
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
      <p>Pie chart</p>
      <div className="values">
        <h2>Spending by Category:</h2>
        <div className="valueText">
          <div className="box1">
            <div id="travelValue">
              <h4>2.99</h4> <p>tonnes on travel</p>
            </div>
            <div id="householdValue">
              <h4>1.6</h4> <p>tonnes on household</p>
            </div>
          </div>
          <div className="box2">
            <div id="goodsValue">
              <h4>1.3</h4> <p>tonnes on stuff</p>
            </div>
            <div id="foodValue">
              <h4>0.5</h4> <p>tonnes on food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
