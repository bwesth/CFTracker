import React from "react";
import Popup from "reactjs-popup";

// Refactor into TestResults (also rename TestResults)

export default ({trigger, children}) => {
  return (
    <Popup trigger={trigger} position="center center">
      {children}
    </Popup>
  );
};
