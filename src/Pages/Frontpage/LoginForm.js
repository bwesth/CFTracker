import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { UserContext } from "../../Main/UserContext";
import Dashboard from "../Dashboard/Dashboard";

import firebase from "../../components/Firebase/firebase";

export default (props) => {
  const setUser = useContext(UserContext).user[1];

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // LOGIN API call and logic here
  const submit = (data) => {
    // console.log(data)
    // let username = ""
    let url = new URL("http://localhost:3001/login");
    // let url = 'http://localhost:3001/login'
    url.search = new URLSearchParams(data).toString();

    fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "text/plain", //application/json
      },
      body: JSON.stringify(data),
      timeout: 5000,
    })
      .then((response) => response.json())
      .then((fetchdata) => {
        console.log(fetchdata);
        setUser({ name: fetchdata.name, email: data.email });
      });

    props.login(<Dashboard />);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="popup-wrapper">
      <form
        className="login-form"
        onSubmit={(e) => e.preventDefault() && false}
      >
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          ref={register}
        />
        <input
          name="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          ref={register}
        />
        <input type="submit" onClick={login} />
      </form>
    </div>
  );

  async function login() {
		try {
			await firebase.login(email, password)
      //props.history.replace('/dashboard')
      console.log("Success");
		} catch(error) {
			alert(error.message)
		}
	}
};
