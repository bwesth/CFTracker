import React, { useState } from "react";

export default ({pledge, addPledge}) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const { symbol, head, body, tonnes, color, img, description } = pledge

  const Tonnes = () => (
    <div className="pledgeBox" style={{ backgroundColor: color }}>
      <h1>{tonnes}</h1>
      <p>
        tonnes of
        <br /> C02 saved
      </p>
    </div>
  );

  return (
    <>
      <div
        className="pledge"
        onClick={() => setDescriptionVisible((visibility) => !visibility)}
      >
        <h1 className="pledgeBox" style={{ backgroundColor: color }}>
          {symbol}
        </h1>
        <div>
          <h2>{head}</h2>
          <p>{body}</p>
          <h1 style={{fontSize: "1.5em", margin: 0, padding: 0}}>▼</h1>
        </div>
        {Tonnes()}
      </div>
      {descriptionVisible && (
        <div className="pledge-description">
          <img src={img} />
          <p>{description}</p>
          {addPledge && <button onClick={() => addPledge(pledge)}>Accept Pledge</button> }
        </div>
      )}
    </>
  );
};
