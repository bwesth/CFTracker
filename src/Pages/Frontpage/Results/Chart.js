import React from "react";

export default ({ img }) => {
  const style = {
    height: "100%",
    width: "auto",
  };

  return (
    <div style={style}>
      <img style={style} src={img} />
    </div>
  );
};
