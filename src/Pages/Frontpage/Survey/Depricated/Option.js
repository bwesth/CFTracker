import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Main/UserContext";

export default (props) => {
  const [data, setData] = useContext(UserContext).surveyChoices,
  [checked, setChecked] = useState(false)
  // console.log(props.text+": "+props.optionIndex)
  /* 
  Syncing to context by utilizing context useState hook function, 
  and checking the context each time. All <Option /> loads every time a change is many in any one componant.
  TODO: Look into individual <Option /> state (context) managment for less remounting.
  */
useEffect(() => {
  // console.log(data[props.themeIndex])
  // console.log(props.optionIndex)
  console.log("------------")
  console.log(data[props.themeIndex])
    console.log(props.optionIndex)
    console.log("-------------")
  // setChecked(data[props.themeIndex] === props.optionIndex)
  // console.log(checked)
},data)


  return (
    <>
      <p>{props.text}</p>
      <input
        name={props.text}
        type="radio"
        // id={props.themeIndex}
        formID={props.themeIndex}
        onChange={() => {
          let list = data
          list[props.themeIndex] = props.optionIndex
          console.log(list)
          setData(list);
        }}
        // checked={checked}
      />
    </>
  );
};