import React, { useState } from "react";

export default ({ pledge, addPledge, removePledge, theme, index }) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const { symbol, head, body, tonnes, color, img, description } = pledge;

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
          <h4>▼</h4>
        </div>
        {Tonnes()}
      </div>
      {descriptionVisible && (
        <div className="pledge-description">
          <img src={img} alt="Pledge icon" />
          <p>{description}</p>
          {addPledge && (
            <button className="acceptPledge" onClick={() => addPledge(index)}>
              Accept Pledge
            </button>
          )}
          {removePledge && (
            <button
              className="acceptPledge"
              onClick={() => {
                setDescriptionVisible((state) => !state);
                removePledge(index, theme);
              }}
            >
              Remove Pledge
            </button>
          )}
        </div>
      )}
    </>
  );
};
