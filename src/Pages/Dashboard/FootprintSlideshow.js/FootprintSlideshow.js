import React, { useState } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import TreeChart from "./TreeChart";

export default () => {
  const [index, setIndex] = useState(0);

  const slides = [<LineGraph />, <PieChart />, <TreeChart />, <BarChart />];

    function click(val) {
        let newIndex = index+val
        if (newIndex < 0) {
            newIndex = slides.length-1
        } else if (newIndex > slides.length-1) {
            newIndex = 0
        }
        setIndex(newIndex)
        console.log(newIndex)
        console.log(index)
    }

  return (
    <Wrapper>
      <div className="slides">
        <button onClick={() => click(-1)}> &lt; </button>
        {slides[index]}
        <button onClick={() => click(1)}> &gt; </button>
      </div>
    </Wrapper>
  );
};
