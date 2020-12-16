import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { UserContext } from "../../Main/UserContext";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setLoggedIn = useContext(UserContext).loggedIn[1];
  const fb = useContext(UserContext).firebase;

  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });

  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
      <form
        className="login-form"
        onSubmit={(e) => e.preventDefault() && false}
      >
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
            </div >
          </div>
          <div className="text">
          <p>Forgot username or password?</p>
          <p>Don’t have an account? Sign up!</p>
          </div>
          <input className="logInButton" type="submit" onClick={login} />
        </div>
      </form>
  );

  async function login() {
    try {
      await fb.login(email, password);
      setLoggedIn(true);
      console.log(fb.getCurrentUsername());
    } catch (error) {
      alert(error.message);
    }
  }
};
