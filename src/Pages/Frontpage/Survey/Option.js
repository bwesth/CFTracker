import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const [data, setData] = useContext(UserContext).surveyChoices;

  /* 
  Syncing to context by utilizing context useState hook function, 
  and checking the context each time. All <Option /> loads every time a change is many in any one componant.
  TODO: Look into individual <Option /> state (context) managment for less remounting.
  */
 
  return (
    <>
      <p>{props.text}</p>
      <input
        name={props.text}
        type="radio"
        formID={props.formID}
        onChange={() => {
          setData({ ...data, [props.formID]: props.text });
        }}
        checked={data[props.formID] === props.text}
      />
    </>
  );
};
