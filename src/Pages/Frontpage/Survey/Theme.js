import React from "react";
import Option from "./Options";

export default (props) => {
  return (
    <div>
      <h1>{props.theme.name}</h1>
      <p>{props.theme.question}</p>
      {props.theme.options.map((item) => (
        <Option option={item} reg={props.reg} />
      ))}
    </div>
  );
};
