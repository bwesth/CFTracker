import React, { useState, useContext } from "react";
import { UserContext } from "../../Main/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fb = useContext(UserContext).firebase;
  const [loggedIn, setLoggedIn] = useContext(UserContext).loggedIn;
  const [userPledges, setPledges] = useContext(UserContext).pledges;
  const [userSurvey, setSurveyChoices] = useContext(UserContext).surveyChoices;
  
  // const footprint = useContext(UserContext).footprint[0];
  
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });
  
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  
  async function onRegister() {
    try {
      console.log("Register starting")
      await fb.register(name, email, password);
      await fb.login(email, password);
      // await fb.addFootprint(footprint);
      await fb.setUserData([userPledges, userSurvey])
      console.log("Register finished")
      setLoggedIn(true);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form
      className="sign-up-form"
      onSubmit={(e) => e.preventDefault() && false}
      >
      <div className="SignUpH">
        <h1>Sign up</h1>
      </div>
      <div className="Inputs">
        <div className="userInputs">
          <div className="Name">
            <p>Name</p>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={register}
            />
          </div>
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
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={register}
            />
          </div>
        </div>
        <input className="signUpButton" type="submit" onClick={onRegister} />
      </div>
    </form>
  );

};
