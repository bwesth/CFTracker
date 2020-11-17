import React from "react";

export default (props) => {
  const [data, setData] = useContext(UserContext).surveyChoices;

  return (
    <>
      <p>{props.text}</p>
      <input
        name={props.text}
        type="number"
        formID={props.formID}
        onChange={() => {
          setData();
        }}
        value={data[props.name]}
      />
    </>
  );
};
