import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

// import Option from "./Options";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  // const status = footprint[props.option.text];

  return (
    <div>
      <h1>{props.theme.name}</h1>
      <p>{props.theme.question}</p>
      {props.theme.options.map((item) => (
        <>
          <p>{item.text}</p>
          <input
            name={item.text}
            type="radio"
            ref={props.reg}
            checked={footprint[item.text] === "on"}
          />
        </>
      ))}
    </div>
  );
};
