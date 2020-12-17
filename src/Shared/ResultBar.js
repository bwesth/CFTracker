import React from "react";

export default ({ value, name }) => {
  const newValue = (value / 18000) * 100;

  return (
    <>
      <p>{name}</p>
      <progress id="file" value={newValue} max="100">
        {value}
      </progress>
    </>
  );
};
