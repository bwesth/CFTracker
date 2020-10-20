import React, { useContext } from "react";
import Theme from "./Theme";
import { useForm } from "react-hook-form";
import TestResults from "../TestResults";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const [Survey, setSurvey] = useContext(UserContext).footprint;

  const { register, handleSubmit } = useForm({});

  const submit = (data) => {
    setSurvey(data);
    props.setDisplay(
      <TestResults results={data} setDisplay={props.setDisplay} />
    );
  };

  return (
    <div className="survey">
      <form onSubmit={handleSubmit((d) => submit(d))}>
        {props.themes.map((item) => (
          <Theme reg={register} theme={item} />
        ))}
        <p>All done! Click send to see your carbon footprint</p>
        <input type="submit" />
      </form>
    </div>
  );
};
