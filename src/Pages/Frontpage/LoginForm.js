import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { UserContext } from "../../Main/UserContext";
import Dashboard from "../Dashboard/Dashboard";

export default (props) => {
  //const setUser = useContext(UserContext).user[1];
  //const [user, setUser] = useContext(UserContext).user;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useContext(UserContext).loggedIn;
  const fb = useContext(UserContext).firebase;

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  /* const submit = (data) => {
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
  }; */
  return (
    <div className="popup-wrapper">
      <form
        className="login-form"
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
        <input type="submit" onClick={login} />
      </form>
    </div>
  );

  async function login() {
		try {
      await fb.login(email, password)
      setLoggedIn(true);
      console.log(fb.getCurrentUsername())
		} catch(error) {
			alert(error.message)
		}
	}

/*   return (
    <div className="popup-wrapper">
      <form
        className="login-form"
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <input name="email" type="email" ref={register} />
        <input name="password" type="text" ref={register} />
        <input type="submit" />
      </form>
    </div>
  ); */
};
