import React from "react";
import placeholder from "../img/barchart_ver_1.jpg";

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
