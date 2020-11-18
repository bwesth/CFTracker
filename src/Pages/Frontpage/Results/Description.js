import React from "react";

export default ({ children }) => {
  const style = {
    alignSelf: "center",
    justifySelf: "center",
    height: "100%",
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "500px",
  };

  return <div style={style}>{children}</div>;
};
