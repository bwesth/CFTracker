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
      <Stats />
      <FootprintSlideshow />
      <Pledges /> 
    </div>
  );
};
