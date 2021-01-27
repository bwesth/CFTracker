import React, { useContext } from "react";
import Wrapper from "../../../Shared/Wrapper/Wrapper";
import Pledge from "./Pledge";
import { UserContext } from "../../../Main/UserContext";
import { Link } from "react-router-dom";
import pledgesStore from "../../../Data/pledgesStore";

export default ({ pledgesRender }) => {
  const context = useContext(UserContext);
  const [pledges, setPledgesList] = context.pledges;

  function removePledge(pledgeIndex, theme) {
    let list = pledges[theme];
    let index = list.indexOf(pledgeIndex);
    list.splice(index, 1);
    setPledgesList((state) => ({ ...state, [theme]: [...list] }));
    context.updateFootprint();
  }

  function parsePledges(theme, themeIndex) {
    console.log(theme);
    console.log(pledges);
    return pledges[theme].map((index) => {
      const pledge = pledgesStore[themeIndex].list[index];
      return (
        <Pledge
          pledge={pledge}
          index={index}
          removePledge={removePledge}
          theme={theme}
        />
      );
    });
  }
  let transportPledges = parsePledges("transport", 0);
  let householdPledges = parsePledges("household", 1);
  let goodsPledges = parsePledges("goods", 2);
  let foodPledges = parsePledges("food", 3);

  return (
    <Wrapper direction="column">
      {transportPledges.length < 1 &&
      foodPledges.length < 1 &&
      goodsPledges.length < 1 &&
      householdPledges.length < 1 ? (
        <>
          <h1>You have no pledges yet!</h1>
          <p>Click the button to see the pledges you can make</p>
        </>
      ) : (
        <>
          {transportPledges.length > 0 && (
            <>
              <h1>Transportation</h1>
              <div className="pledges">{transportPledges}</div>
            </>
          )}
          {householdPledges.length > 0 && (
            <>
              <h1>Household</h1>
              <div className="pledges">{householdPledges}</div>
            </>
          )}
          {goodsPledges.length > 0 && (
            <>
              <h1>Goods</h1>
              <div className="pledges">{goodsPledges}</div>
            </>
          )}
          {foodPledges.length > 0 && (
            <>
              <h1>Food</h1>
              <div className="pledges">{foodPledges}</div>
            </>
          )}
        </>
      )}
      <div className="pledge-button">
        <Link to="/pledges"> + Add More Pledges </Link>
      </div>
    </Wrapper>
  );
};
