import React from "react";
import Theme from "./Theme";
import { useForm } from "react-hook-form";
import TestResults from "../Results/TestResults";

export default (props) => {
  const { handleSubmit } = useForm({});

  const submit = (data) => {
    props.setDisplay(
      <TestResults
        results={data}
        setDisplay={props.setDisplay}
        popup={props.popup}
      />
    );
  };

  return (
    <div className="survey">
      <form onSubmit={handleSubmit((d) => submit(d))}>
        {props.themes.map((item) => (
          <Theme
            name={item.name}
            question={item.question}
            options={item.options}
          />
        ))}
        <div className="done">
          <h1>All done!</h1>
          <h2>Click send to see your carbon footprint</h2>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
