import React from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Pledge from "./Pledge";
import placeholder from '../../../placeholderimage.png'

export default () => {
  let data = [
    {
      symbol: "🚲",
      head: "Cyclical Commute",
      body: "I will ride my bicycle to work every day.",
      tonnes: 1.1,
      color: "#02C39A",
      img: placeholder,
      description: `Cycling is a great healthy habit! Start cycling to work instead of driving, and you’ll save your own body as well as the planet! Keep it up for a month and you’ll save a whole tonne of C02!`,
    },
    {
      symbol: "✈️",
      head: "Infrequent Flier",
      body: "I will abstain from long distance flights for a year.",
      tonnes: 0.5,
      color: "#F46A67",
      img: placeholder,
      description: `Cycling is a great healthy habit! Start cycling to work instead of driving, and you’ll save your own body as well as the planet! Keep it up for a month and you’ll save a whole tonne of C02!`,

    },
    {
      symbol: "🥬",
      head: "Going Vegan",
      body: "I will stick to a vegan diet 5 days of the week.",
      tonnes: 2.3,
      color: "#53AED5",
      img: placeholder,
      description: `Cycling is a great healthy habit! Start cycling to work instead of driving, and you’ll save your own body as well as the planet! Keep it up for a month and you’ll save a whole tonne of C02!`,
    },
  ];
  let pledges = data.map((pledge) => (
    <Pledge
      symbol={pledge.symbol}
      head={pledge.head}
      body={pledge.body}
      tonnes={pledge.tonnes}
      color={pledge.color}
      img={pledge.img}
      description={pledge.description}
    />
  ));
  /* ToDo:  

    */
  return (
    <Wrapper direction="column">
      <div className="pledges">{pledges}</div>
    </Wrapper>
  );
};
