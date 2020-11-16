import React from "react";

import Option from "./Option";

export default (props) => <div className="theme">
      <h1>{props.name}</h1>
      <h2>{props.question}</h2>
      {props.options.map((item) => (
        <Option text={item.text} formID={props.name} />
      ))}
    </div>
