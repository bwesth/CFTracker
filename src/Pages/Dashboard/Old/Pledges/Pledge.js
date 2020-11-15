import React from "react";
//import badbunny from "../../../Images/Bunnies/BadBunny.png"

export default (props) => {
  //Can't get my adorable bunny working bjorn!
  //const bunnyimage = require ('src/Pages/Dashboard/Pledges/BunnyBan.png');
  return (
    <div>
      <h2>{props.pledgename} Pledge</h2>
      <p>{props.pledgetext}</p>
      {props.img !== "" && 
          <img src={process.env.PUBLIC_URL + `${props.img}`} alt="pledge image" />
      }
    </div>
  );
};
