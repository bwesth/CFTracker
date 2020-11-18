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
  const [surveyChoicesData, setSurveyChoices] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  const pledges = useState([]);
  const footprint = useState();

  /* This is a massivly shitty way of doing it, but it was the best way 
  I could think of that was also sort of readable, without having to 
  redo the survey format due to changes in Data/survey.js.
  After having fought with syncing survey values and checked status to surveyChoices,
  I don't wanna go down that dark hall again just yet */

  function calcFootprint(theme) {
    console.log(theme)
    let result = 0;
    let index = 0;
    let length = 3;
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
      case "total":
        index = 0; //redundant, for reading purposes
        length = data.themes.length;
        break;
    }
    for (let i = index; i < index+length; i++) {
      // console.log(i)
      result += data.themes[i].options[surveyChoices[0][i]].value;
    }
    console.log(result)
    return result;
  }

  function updateFootprint(){
    footprint[1]({
      transport: calcFootprint("transport"),
      food: calcFootprint("food"),
      goods: calcFootprint("goods"),
      household: calcFootprint("household"),
      total: calcFootprint("total"),
    });

  }

  function surveyHook (index, value) {
    let list = [...surveyChoicesData]
    list[index] = value
    setSurveyChoices([...list])
    updateFootprint()
  }

  const surveyChoices = [surveyChoicesData, surveyHook]

  useEffect(() => {
    updateFootprint()
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        surveyChoices,
        pledges,
        footprint,
        firebase,
        loggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
