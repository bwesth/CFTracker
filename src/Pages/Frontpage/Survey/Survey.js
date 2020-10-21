import React, { useContext } from "react";
// import Theme from "./Theme";
import { useForm } from "react-hook-form";
import TestResults from "../TestResults";
import { UserContext } from "../../../Main/UserContext";

export default (props) => {
  const [survey, setSurvey] = useContext(UserContext).footprint;

  const { register, handleSubmit } = useForm({});

  const submit = (data) => {
    setSurvey(data);
    props.setDisplay(
      <TestResults results={data} setDisplay={props.setDisplay} popup={props.popup}/>
    );
  };

  return (
    <div className="survey">
      <form onSubmit={handleSubmit((d) => submit(d))}>
        {props.themes.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.question}</p>
            {item.options.map((item) => (
              <>
                <p>{item.text}</p>
                <input
                  name={item.text}
                  type="radio"
                  ref={register}
                  checked={survey[item.text] === "on"}
                />
              </>
            ))}
          </div>
        ))}
        <p>All done! Click send to see your carbon footprint</p>
        <input type="submit" />
      </form>
    </div>
  );
};
