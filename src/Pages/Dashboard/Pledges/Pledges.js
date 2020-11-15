import React from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import cycle from './cycle.bmp'
import Pledge from './Pledge'

export default () => {
    let data = [
        {symbol: "🚲", head: "Cyclical Commute", body: "I will ride my bicycle to work every day.", tonnes: 1.1, color: "#02C39A"},
        {symbol: "✈️", head: "Infrequent Flier", body: "I will abstain from long distance flights for a year.", tonnes: 0.5, color: "#F46A67"},
        {symbol: "🥬", head: "Going Vegan", body: "I will stick to a vegan diet 5 days of the week.", tonnes: 2.3, color: "#53AED5"}

    ]
    let pledges = data.map((pledge => <Pledge symbol={pledge.symbol} head={pledge.head} body={pledge.body} tonnes={pledge.tonnes} color={pledge.color} />))
  /* ToDo:  

    */
  return (
    <Wrapper direction="column">
      <div className="pledges">
      {pledges}
      </div>
    </Wrapper>
  );
};
