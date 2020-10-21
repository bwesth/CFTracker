import React from "react";

import Option from "./Option";

export default (props) => <div>
      <h1>{props.name}</h1>
      <p>{props.question}</p>
      {props.options.map((item) => (
        <Option text={item.text} formID={props.name} />
      ))}
    </div>
