import React from "react";

export default () => {
  const text1 = "Your Carbon Footprint:",
    text2 = "6.5 tonnes per month",
    text3 =
      "Want to prevent the climate crisis? Your carbon footprint is {x} times too big.";

  const style = {
    height: "100%",
    width: "auto",
    backgroundColor: "aquamarine",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    // margin: "10%",
  };

  return (
    <div style={style}>
      <p>{text1}</p>
      <br />
      <p>{text2}</p>
      <br />
      <p>{text3}</p>
      <br />
    </div>
  );
};
