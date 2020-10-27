import React from "react";

export default (props) => {
  const value = (props.value / 18000) * 100;

  return (
    <>
      <p>{props.name}</p>
      <progress id="file" value={value} max="100">
        {value}
      </progress>
    </>
  );
};
