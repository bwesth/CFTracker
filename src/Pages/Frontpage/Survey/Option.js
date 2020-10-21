import React, { useContext } from "react";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const footprint = useContext(UserContext).footprint[0];
  const [data, setData] = useContext(UserContext).surveyChoices;
  // console.log(data)
  // console.log(props.formID)
  // console.log(data[props.formID])
  // console.log(props.text)

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
