import React from 'react'
import {VictoryChart, VictoryAxis, VictoryBar, VictoryTheme} from 'victory';

export default () => {
    // This holds the data for each user type
    const data = [
        {user: 1, expenditure: 13000}, //This value is the user's value, so it needs to be called somehow from their account details.
        {user: 2, expenditure: 14500},
        {user: 3, expenditure: 17250},
        {user: 4, expenditure: 0}
      ];

    return <div className="slide">

        {/* Style needs a lot of work */}
        <div className="barChart">
            <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
            >

            <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["You", "EU Citizen", "US Citizen", "Carbon Neutral"]}
            />

            <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000} tonnes`)}
            />

            <VictoryBar
                data={data}
                x="user"
                y="expenditure"
            />

        </VictoryChart>
      </div>

      {/* Have a lot of work to do here to align everything etc. */}
      <div className="chartInfo">
        <h2>Your Carbon Footprint</h2>
        <p>6.5 Tonnes Per Month</p> 
        <p>Want to prevent the climate crisis? Your footprint is X times too big.</p>
      </div>

    </div>
}