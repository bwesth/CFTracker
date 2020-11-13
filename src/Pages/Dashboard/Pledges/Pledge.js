import React from "react";

export default ({ symbol, head, body, tonnes, color }) => {
  const Tonnes = () => 
    <div className="pledgeBox" style={{backgroundColor: color}}>
      <h1>{tonnes}</h1>
      <p>tonnes of C02 saved</p>
    </div>;
  ;
  /* ToDo:  

    */
  return (
    <div className="pledge">
      <h1 className="pledgeBox"  style={{backgroundColor: color}}>{symbol}</h1>
      <div>
      <h2>{head}</h2>
      <p>{body}</p>
      </div>
      {Tonnes()}
    </div>
  );
};
