import React, { useContext, useEffect } from "react";
import { VictoryPie } from "victory";
import { UserContext } from "../../../Main/UserContext";

export default ({ pieStats }) => {
  const {
    transport: { sumTotal: transport },
    household: { sumTotal: household },
    goods: { sumTotal: goods },
    food: { sumTotal: food },
  } = useContext(UserContext).footprint[0];

  let dataList = [];
  let colorList = [];
  if (transport > 0) {
    dataList.push({
      x: "Transport",
      y: transport,
    });
    colorList.push("#53AED5");
  }
  if (household > 0) {
    dataList.push({
      x: "Household",
      y: household,
    });
    colorList.push("#02C39A");
  }
  if (goods > 0) {
    dataList.push({
      x: "Goods",
      y: goods,
    });
    colorList.push("#F46A67");
  }
  if (food > 0) {
    dataList.push({
      x: "Food",
      y: food,
    });
    colorList.push("#BC59B2");
  }

  return (
    <div className="slide">
      <div className="pieSlide">
        <VictoryPie
          colorScale={colorList}
          data={dataList}
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
              <div className="travelValue">
                <h4>{transport > 0 ? Math.round(transport) : 0}</h4>{" "}
                <p>tonnes on transport</p>
              </div>
              <div className="householdValue">
                <h4>{household > 0 ? Math.round(household) : 0}</h4>{" "}
                <p>tonnes on household</p>
              </div>
            </div>
            <div className="box2">
              <div className="goodsValue">
                <h4>{goods > 0 ? Math.round(goods) : 0}</h4>{" "}
                <p>tonnes on goods</p>
              </div>
              <div className="foodValue">
                <h4>{food > 0 ? Math.round(food) : 0}</h4> <p>tonnes on food</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
