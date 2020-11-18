import React from "react";

import Option from "./Option";

export default (props) => {
  // console.log(props.name+": "+props.index)
return (
  
  <div className="theme">
    <h1>{props.name}</h1>
    <h2>{props.question}</h2>
    {props.options.map((item, index) => (
      <Option text={item.text} formID={props.name} themeIndex={props.index} optionIndex={index} />
    ))}
  </div>
)};
