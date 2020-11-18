import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { UserContext } from "../../Main/UserContext";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setLoggedIn = useContext(UserContext).loggedIn[0];
  const fb = useContext(UserContext).firebase;

  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });

  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="popup-wrapper">
      <form
        className="login-form"
        onSubmit={(e) => e.preventDefault() && false}
      >
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={register}
        />
        <input
          id="password"
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={register}
        />
        <input type="submit" onClick={login} />
      </form>
    </div>
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
