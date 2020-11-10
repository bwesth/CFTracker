import React from "react";
import placeholder from "../img/trees.png";

export default () => {
  const style = {
    height: "100%",
    width: "auto",
    backgroundColor: "orange",
  };

  return (
    <div style={style}>
      <img style={style} src={placeholder} />
    </div>
  );
};
