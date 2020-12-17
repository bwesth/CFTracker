import React from "react";
import Popup from "reactjs-popup";

// Refactor into TestResults (also rename TestResults)

export default ({ trigger, children }) => {
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  return (
    <Popup trigger={trigger} position="center center" {...{ overlayStyle }}>
      {children}
    </Popup>
  );
};
