import React, { useEffect, useState } from "react";
import firebase from "../components/Firebase/firebase";
import data from "../Data/survey";
const UserContext = React.createContext();

function UserProvider(props) {
  const user = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const loggedIn = useState(false);
  const [surveyChoicesData, setSurveyChoices] = useState([
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
  ]);
  const pledges = useState({
    transport: [],
    food: [],
    goods: [],
    household: [],
  });

  const footprint = useState();

  /* This is a massivly shitty way of doing it, but it was the best way 
  I could think of that was also sort of readable, without having to 
  redo the survey format due to changes in Data/survey.js.
  After having fought with syncing survey values and checked status to surveyChoices,
  I don't wanna go down that dark hall again just yet */

  function calcFootprint(theme) {
    console.log(theme)
    let surveyResult = 0;
    let index = 0;
    switch (theme) {
      case "transport":
        index = 0; //redundant, for reading purposes
        break;
      case "food":
        index = 3;
        break;
      case "good":
        index = 6;
        break;
      case "household":
        index = 9;
        break;
    }
    for (let i = index; i < index + 3; i++) {
      surveyResult += data.themes[i].options[surveyChoices[0][i]].value;
    }
    console.log("from survey: " + surveyResult);
    let pledgesResult = 0;
    let list = [...pledges[0][theme]];
    for (let i = 0; i < list.length; i++) {
      console.log(i)
      pledgesResult = pledgesResult+list[i].tonnes;
    }
    console.log("from pledges: " + pledgesResult);
    return surveyResult - pledgesResult;
  }

  function updateFootprint() {
    const transport = calcFootprint("transport"),
      food = calcFootprint("food"),
      goods = calcFootprint("goods"),
      household = calcFootprint("household"),
      total = transport + food + goods + household;

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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
