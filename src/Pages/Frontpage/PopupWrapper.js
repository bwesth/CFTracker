import React from "react";
import Popup from "reactjs-popup";

// Refactor into TestResults (also rename TestResults)

export default (props) => {
  return (
    <Popup trigger={props.trigger} position="center center">
      {props.children}
    </Popup>
  );
};