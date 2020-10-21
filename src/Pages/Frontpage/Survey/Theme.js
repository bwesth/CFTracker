import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

import Option from "./Option";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  
  // const status = footprint[props.option.text];

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.question}</p>
      {props.options.map((item) => (
        <Option text={item.text} formID={props.name} />
      ))}
    </div>
  );
};
