import Stats from './Stats/Stats'
import React, { useContext } from "react";
import { UserContext } from "../../Main/UserContext";
import FootprintSlideshow from './FootprintSlideshow.js/FootprintSlideshow';
import Pledges from './Pledges/Pledges';

export default () => {
    const [user, setUsername] = useContext(UserContext).user;

  // console.log(user)

  return (
    <div className="dashboard">
      <div className="banner">
        <h1>Your Climate Actions</h1>
      </div>
      <h3>Your Carbon Expenditure</h3> 
      <Stats />
      <FootprintSlideshow />
      <h3>Your Plages</h3>
      <Pledges /> 
      <div style={{height:"100px"}}>
      </div>
    </div>
  );
};
