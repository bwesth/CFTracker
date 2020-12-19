import React, { useContext } from "react";
// import Theme from "./Theme";
// import Option from "./Option";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Main/UserContext";
import TestResults from "../../Results/TestResults";
import { Link } from "react-router-dom";

export default ({ themes }) => {
  const { handleSubmit } = useForm({});
  const [data, setData] = useContext(UserContext).surveyChoices;
  //is this also never used?
  const updateFootprint = useContext(UserContext).updateFootprint;


  const Theme = ({ icon, name, question, options, index }) => {
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
  //<label for={optionIndex}><p>{text}</p></label>
  const Option = ({ text, themeIndex, optionIndex, formID }) => {
    return (
      <div className="option">
        <input
          name={text}
          type="radio"
          formID={formID}
          onChange={() => {
            setData(themeIndex, optionIndex);
          }}
          checked={optionIndex === data[themeIndex]}
        />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="survey">
      <form>
        {themes.map(({ icon, name, question, options }, index) => (
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
          {/* <input type="submit"></input> */}
          <Link to="/results" className="backButton">
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};
