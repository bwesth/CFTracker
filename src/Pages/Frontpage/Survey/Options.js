import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  const status = footprint[props.option.text];
  // console.log(status)
  return (
    <>
      <p>{props.option.text}</p>
      <input
        name={props.option.text}
        type="radio"
        ref={props.reg}
        checked={status === "on"}
      />
    </>
  );
};
