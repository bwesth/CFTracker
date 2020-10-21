import React from "react";
import Theme from "./Theme";
import { useForm } from "react-hook-form";
import TestResults from "../TestResults";

export default (props) => {

  const { handleSubmit } = useForm({});

  const submit = (data) => {
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
