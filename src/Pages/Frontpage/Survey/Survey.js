import React, { useContext } from "react";
// import Theme from "./Theme";
// import Option from "./Option";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Main/UserContext";
import TestResults from "../Results/TestResults";

export default (props) => {
  const { handleSubmit } = useForm({});
  const [data, setData] = useContext(UserContext).surveyChoices;
  const updateFootprint = useContext(UserContext).updateFootprint;
  // console.log(data)
  const submit = (data) => {
    props.setDisplay(
      <TestResults
        results={data}
        setDisplay={props.setDisplay}
        popup={props.popup}
        scrollToTop={props.scrollToTop}
      />
    );
  };

  const Theme = ({icon, name, question, options, index }) => {
    return (
      <div className="theme">
        <div className="surveyHeader">
          <img src={icon} alt="theme icon" />
          <h1>{name}</h1>
        </div>
        <h2>{question}</h2>
        {options.map(({ text }, optionsIndex) => (
          <Option
            text={text}
            formID={name}
            themeIndex={index}
            optionIndex={optionsIndex}
          />
        ))}
      </div>
    );
  };

  const Option = ({ text, themeIndex, optionIndex, formID }) => {
    return (
      <div className="option">
        <input
          name={text}
          type="radio"
          // id={props.themeIndex}
          formID={formID}
          onChange={() => {
            console.log(
              "Changing theme number: " +
                themeIndex +
                "\n to option number: " +
                optionIndex
            );
            setData(themeIndex, optionIndex);
          }}
          checked={optionIndex === data[themeIndex]}
        />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div ref={props.ref} className="survey">
      <form onSubmit={handleSubmit((d) => submit(d))}>
        {props.themes.map(({ icon,name, question, options }, index) => (
          <Theme
            icon={icon}
            index={index}
            name={name}
            question={question}
            options={options}
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
