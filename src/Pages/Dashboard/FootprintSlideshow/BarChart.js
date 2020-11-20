import React, { useContext } from "react";
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from "victory";
import { UserContext } from "../../../Main/UserContext";

export default () => {
  const footprint = useContext(UserContext).footprint[0].total.sumTotal;
  // This holds the data for each user type
  const data = [

    { user: 1, expenditure: footprint, fill: "#02C39A"}, //This value is the user's value, so it needs to be called somehow from their account details.
    { user: 2, expenditure: 40, fill: "#C4C4C4" },
    { user: 3, expenditure: 50, fill: "#C4C4C4" },
    { user: 4, expenditure: 15, fill: "#C4C4C4" },
  ];

  return (
    <div className="slide">
      {/* Style needs a lot of work */}
      <div className="barChart">
        <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
          <VictoryAxis
          
            tickValues={[1, 2, 3, 4]}
            tickFormat={["You", "EU Citizen", "US Citizen", "World Goal"]}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `$${x / 1000} tonnes`}
          />

          <VictoryBar  
            style={{  data: { fill: ({ datum }) => datum.fill} }}
            data={data} x="user" y="expenditure" />
        </VictoryChart>
      </div>

      {/* Have a lot of work to do here to align everything etc. */}
      <div className="chartInfo">
        <h2>Your Carbon Footprint</h2>
        <p>{footprint} Tonnes Per Month</p>
        <p>
          Want to prevent the climate crisis? Your footprint is {Math.floor(footprint/data[3].expenditure)} times too big.
        </p>
      </div>
    </div>
  );
};
