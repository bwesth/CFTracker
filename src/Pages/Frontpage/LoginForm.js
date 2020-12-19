import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { UserContext } from "../../Main/UserContext";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateFootprint = useContext(UserContext).updateFootprint;
  const [userPledges, setPledges] = useContext(UserContext).pledges;
  const userSurvey = useContext(UserContext).surveyChoices[0];
  const setSurveyChoices = useContext(UserContext).setSurveyChoices;
  const setLoggedIn = useContext(UserContext).loggedIn[1];
  const fb = useContext(UserContext).firebase;

  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });

  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  async function login() {
    try {
      await fb.login(email, password);
      const userData = await fb.getUserData();
      setPledges(userData.pledges);
      setSurveyChoices(userData.surveyChoices);
      setLoggedIn(true);
    } catch (error) {
      alert("login():"+error.message);
    }
  }

  useEffect(() => {
    updateFootprint();
  }, [userSurvey]);

  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault() && false}>
      <div className="logInH">
        <h1>Log In</h1>
      </div>
      <div className="Inputs">
        <div className="userInputs">
          <div className="Email">
            <p>Email</p>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={register}
            />
          </div>
          <div className="Password">
            <p>Password</p>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={register}
            />
          </div>
        </div>
        <div className="text">
          <p>Don’t have an account? Sign up!</p>
        </div>
        <input className="logInButton" type="submit" onClick={login} />
      </div>
    </form>
  );
};
