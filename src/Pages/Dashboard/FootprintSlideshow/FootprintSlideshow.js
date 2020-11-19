import React, { useState } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import BarChart from "./BarChart";

import PieChart from "./PieChart";
import TreeChart from "./TreeChart";
//import LineGraph from "./LineGraph";

export default () => {
  const [index, setIndex] = useState(0);

  //Might add the linegraph back again later but it looks like shit atm!!!
  const slides = [ <PieChart pieStats = {true}/>, <TreeChart />, <BarChart />];

  function click(val) {
    let newIndex = index + val;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex > slides.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
    console.log(newIndex);
    console.log(index);
  }
  // &lt;
  // &gt; 
  return (
    <Wrapper direction="column">
      <h1>Some views of your footprint</h1>
      <div className="slides">
        <button id="leftArrow" onClick={() => click(-1)}>  </button>
        {slides[index]}
        <button id="rightArrow" onClick={() => click(1)}> </button>
      </div>
    </Wrapper>
  );
};
