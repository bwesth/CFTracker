import React, { useState, useContext } from "react";
import { UserContext } from "../../Main/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

//import firebase from "../../components/Firebase/firebase";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fb = useContext(UserContext).firebase;

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="popup-wrapper">
      <form
        className="sign-up-form"
        onSubmit={(e) => e.preventDefault() && false}
      >
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={register}
        />
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
        <input type="submit" onClick={onRegister} />
      </form>
    </div>
  );

  async function onRegister() {
    try {
      await fb.register(name, email, password);
    } catch (error) {
      alert(error.message);
    }
  }
};