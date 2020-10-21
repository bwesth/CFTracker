import React, { useContext } from "react";
import Theme from "./Theme";
import { useForm } from "react-hook-form";
import TestResults from "../TestResults";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const [survey, setSurvey] = useContext(UserContext).footprint;

  const { register, handleSubmit } = useForm({});

  const submit = (data) => {
    // setSurvey(data);
    props.setDisplay(
      <TestResults results={data} setDisplay={props.setDisplay} popup={props.popup}/>
    );
  };

  return (
    <div className="survey">
      <form onSubmit={handleSubmit((d) => submit(d))}>
        {props.themes.map((item) => (
          <Theme name={item.name}  question={item.question} options={item.options} />
        ))}
        <p>All done! Click send to see your carbon footprint</p>
        <input type="submit" />
      </form>
    </div>
  );
};
