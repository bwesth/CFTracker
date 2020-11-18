import React, { useContext } from "react";
import { UserContext } from "../Main/UserContext";
import ResultBar from "./ResultBar";

export default () => {
  const footprint = useContext(UserContext).footprint[0];
  console.log(footprint);

  return (
    <div className="center ">
      <ResultBar name={"Average Citizen"} value={14800} />
      <ResultBar name={"Your Footprint"} value={footprint.total} />
      <ResultBar name={"Save the world"} value={14800 * 0.3} />
    </div>
  );
};
