import React, { useContext } from "react";
import { VictoryPie } from "victory";
import { UserContext } from "../../../Main/UserContext";

export default ({ pieStats }) => {
  const footprint = useContext(UserContext).footprint[0];

  //Would be nice to destruct this properly so we don't have to use ridiculously long names to summon these variables later.
  //let {{sumTotal: transportTotal}, food, household, goods} = footprint;
  // const { transport: { sumTotal: transportTotal }, food, household, goods } = footprint;
  return (
    <div className="slide">
      <div className="pieSlide">
        <VictoryPie
          colorScale={["#53AED5", "#02C39A", "#F46A67", "#FFE15B"]}
          data={[
            { x: "Transport", y: footprint.transport.sumTotal },
            { x: "HouseHold", y: footprint.household.sumTotal },
            { x: "Goods", y: footprint.goods.sumTotal },
            { x: "Food", y: footprint.food.sumTotal },
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

      {/* Using a bit of a hack to separate this part of the graph. Should it be another component? Debatable. */}
      {pieStats && (
        <div className="values">
          <h2>Spending by Category:</h2>
          <div className="valueText">
            <div className="box1">
              <div id="travelValue">
                <h4>{footprint.transport.sumTotal}</h4>{" "}
                <p>tonnes on transport</p>
              </div>
              <div id="householdValue">
                <h4>{footprint.household.sumTotal}</h4>{" "}
                <p>tonnes on household</p>
              </div>
            </div>
            <div className="box2">
              <div id="goodsValue">
                <h4>{footprint.goods.sumTotal}</h4> <p>tonnes on stuff</p>
              </div>
              <div id="foodValue">
                <h4>{footprint.food.sumTotal}</h4> <p>tonnes on food</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
