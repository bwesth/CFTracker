import React from "react";

export default () => {
  const text1 =
      "The Average European Citizen spends most of their budget at home.",
    text2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
    est laborum.`,
    text3 = "To the left is a chart of your expenditures by category.";

  const style = {
    height: "100%",
    width: "auto",
    backgroundColor: "aquamarine",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "35%"
  };

  return (
    <div style={style}>
      <h2>{text1}</h2>
      <br />
      <p>{text2}</p>
      <br />
      <p>{text3}</p>
      <br />
    </div>
  );
};
