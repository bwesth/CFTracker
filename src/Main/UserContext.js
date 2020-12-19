import React, { useEffect, useState } from "react";
import firebase from "../components/Firebase/firebase";
import data from "../Data/survey";
const UserContext = React.createContext();

function UserProvider({ children }) {
  //I dont think we are using this user anywhere
  const user = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  
  const loggedIn = useState(false);
  const [surveyChoicesData, setSurveyChoices] = useState(new Array(12).fill(4));
  const pledges = useState({
    transport: [],
    food: [],
    goods: [],
    household: [],
  });

  const footprint = useState();

  const indexReference = {
    transport: 0,
    food: 3,
    goods: 6,
    household: 9,
  };

  function calcFootprint(theme) {
    let surveyResult = 0;
    let index = indexReference[theme];
    for (let i = index; i < index + 3; i++) {
      surveyResult += data.themes[i].options[surveyChoices[0][i]].value;
    }
    let pledgesResult = 0;
    let list = [...pledges[0][theme]];
    for (let i = 0; i < list.length; i++) {
      pledgesResult = pledgesResult + list[i].tonnes;
    }
    return {
      surveyTotal: surveyResult,
      pledgeTotal: pledgesResult,
      sumTotal: surveyResult - pledgesResult,
    };
  }

  function updateFootprint() {
    const transport = calcFootprint("transport"),
      food = calcFootprint("food"),
      goods = calcFootprint("goods"),
      household = calcFootprint("household"),
      //This is godawful code, just trying to get it working to begin with.
      total = {
        surveyTotal:
          transport.surveyTotal +
          food.surveyTotal +
          goods.surveyTotal +
          household.surveyTotal,
        pledgeTotal:
          transport.pledgeTotal +
          food.pledgeTotal +
          goods.pledgeTotal +
          household.pledgeTotal,
        sumTotal:
          transport.sumTotal +
          food.sumTotal +
          goods.sumTotal +
          household.sumTotal,
      };

    footprint[1]({
      transport: transport,
      food: food,
      goods: goods,
      household: household,
      total: total,
    });
  }

  function surveyHook(index, value) {
    let list = [...surveyChoicesData];
    list[index] = value;
    setSurveyChoices([...list]);
    updateFootprint();
  }

  const surveyChoices = [surveyChoicesData, surveyHook];

  useEffect(() => {
    updateFootprint();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        surveyChoices,
        pledges,
        footprint,
        updateFootprint,
        firebase,
        loggedIn,
        setSurveyChoices
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
