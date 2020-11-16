import React, { useState } from "react";

export default ({ symbol, head, body, tonnes, color, img, description }) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

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
        </div>
        {Tonnes()}
      </div>
      {descriptionVisible && (
        <div className="pledge-description">
          <img src={img} />
          <p>{description}</p>
        </div>
      )}
    </>
  );
};
