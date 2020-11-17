import { VictoryScatter } from 'victory';
import React from 'react'

export default () => {
    // Not sure this is the best method to make the tree graph. 
    //Maybe a picture would be better? That we slide to reveal? I dunno.
    return <div className="slide">
        <div className="treeGraph">
        <VictoryScatter
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            style={{ data: { fill: "#c43a31" } }}
            bubbleProperty="amount"
            maxBubbleSize={25}
            minBubbleSize={5}
            data={[
                { x: 1, y: 2, amount: 30 },
                { x: 2, y: 3, amount: 40 },
                { x: 3, y: 5, amount: 25 },
                { x: 4, y: 4, amount: 10 },
                { x: 5, y: 7, amount: 45 }
            ]}
        />
        </div>

        <div className="chartInfo">
            <h2>Trees</h2>
            <p>X many trees saved</p>
            <p>By your actions so far</p>
            <p>That's x square kilometers of forest!</p>
        </div>

    </div>
}