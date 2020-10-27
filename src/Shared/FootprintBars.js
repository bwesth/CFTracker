import React, { useContext }  from 'react';
import data from '../Data/intensityKilo'
import { UserContext } from '../Main/UserContext'
import ResultBar from "./ResultBar";


export default () => {

    const footprint = useContext(UserContext).surveyChoices[0];

    const userValue =
    data[footprint.Transport.toLowerCase()] +
    data[footprint.Food.toLowerCase()];

    return (
    <div className="center ">
      <ResultBar name={"Average Citizen"} value={14800} />
      <ResultBar name={"Your Footprint"} value={userValue} />
      <ResultBar name={"Save the world"} value={14800 * 0.3} />
    </div>
)};



    