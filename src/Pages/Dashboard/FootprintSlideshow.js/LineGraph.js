
import React from 'react'
import {VictoryChart, VictoryLabel, VictoryScatter, VictoryLine, VictoryTheme} from 'victory';

export default () => {

    return <div className="slide">
        {/* Need to hook up some arithmetic to the numbers being crunched here. */}
        <div className="lineGraph">
        <VictoryChart theme={VictoryTheme.material} domain={{ x: [0, 8], y: [0, 8]}}>
        <VictoryScatter
          style={{ data: { fill: "#ffffff" } }}
            data={[
              { x: 1, y: 3, symbol: "circle", size: 8 },
              { x: 2, y: 4, symbol: "circle", size: 8 },
              { x: 3, y: 6, symbol: "circle", size: 8 },
              { x: 4, y: 3, symbol: "circle", size: 8 },
              { x: 5, y: 1, symbol: "circle", size: 8 },
              { x: 6, y: 7, symbol: "circle", size: 8 },
              { x: 7, y: 4, symbol: "circle", size: 8 }
            ]}
          />
          <VictoryScatter
            data={[
              { x: 1, y: 3, symbol: "circle", size: 4 },
              { x: 2, y: 4, symbol: "circle", size: 4 },
              { x: 3, y: 6, symbol: "circle", size: 4 },
              { x: 4, y: 3, symbol: "circle", size: 4 },
              { x: 5, y: 1, symbol: "circle", size: 4 },
              { x: 6, y: 7, symbol: "circle", size: 4 },
              { x: 7, y: 4, symbol: "circle", size: 4 }
            ]}
          />
           <VictoryScatter
          style={{ data: { fill: "#ffffff" } }}
            data={[
              { x: 1, y: 2, symbol: "circle", size: 8 },
              { x: 2, y: 3, symbol: "circle", size: 8 },
              { x: 3, y: 5, symbol: "circle", size: 8 },
              { x: 4, y: 4, symbol: "circle", size: 8 },
              { x: 5, y: 6, symbol: "circle", size: 8 },
              { x: 6, y: 3, symbol: "circle", size: 8 },
              { x: 7, y: 2, symbol: "circle", size: 8 }
            ]}
          />
          <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: 1, y: 2, symbol: "circle", size: 4 },
              { x: 2, y: 3, symbol: "circle", size: 4 },
              { x: 3, y: 5, symbol: "circle", size: 4 },
              { x: 4, y: 4, symbol: "circle", size: 4 },
              { x: 5, y: 6, symbol: "circle", size: 4 },
              { x: 6, y: 3, symbol: "circle", size: 4 },
              { x: 7, y: 2, symbol: "circle", size: 4 }
            ]}
          />
          <VictoryLine
          //  interpolation="natural"
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
          style={{
            data: { stroke: "#c43a31" },
            labels: { fill: "#c43a31" }
          }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
              { x: 6, y: 3 },
              { x: 7, y: 2 }
            ]}
          />

          <VictoryLine
          // interpolation="natural"
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 4 },
              { x: 3, y: 6 },
              { x: 4, y: 3 },
              { x: 5, y: 1 },
              { x: 6, y: 7 },
              { x: 7, y: 4 }
            ]}
          />
        </VictoryChart>
      </div>

      {/* Need to hook up some arithmetic to the numbers being crunched here. */}
      <div className="chartInfo">
          <h2>Projected Savings</h2>
          <p>You have saved:</p>
          <p>6.2 Tonnes</p>
          <p>of C02 this month!</p>
      </div>

      </div>
}