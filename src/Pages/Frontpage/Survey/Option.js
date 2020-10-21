import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const [data, setData] = useContext(UserContext).surveyChoices;

  return (
    <>
      <p>{props.text}</p>
      <input
        name={props.text}
        type="radio"
        formID={props.formID}
        onChange={() => {
          setData({...data, [props.formID] : props.text});
        }}
        checked={data[props.formID] === props.text}
      />
    </>
  );
};
