import React from 'react';

export default (props) => {

    //Can't get my adorable bunny working bjorn!
    //const bunnyimage = require ('src/Pages/Dashboard/Pledges/BunnyBan.png');
    
    return(
        <div>
            <h2>{props.pledgename} Pledge</h2>
            <p>{props.pledgetext}</p>
            <img src="BunnyBan.png" /> 
        </div>
    )
}