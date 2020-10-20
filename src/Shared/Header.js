import React from "react";
import img from "../Main/carbon-footprint-730x410.jpg";
// import LoginButton from "./LoginButton";
import LoginForm from "../Pages/Frontpage/LoginForm";
import Popup from "reactjs-popup";

const LoginButton = (props) => {
  return (
    <div className="login">
      {/* <button onClick={() => props.login(true)}>LOGIN</button> */}
      <button>LOGIN</button>
      <p>Already signed up?</p>
    </div>
  );
};

export default (props) => {
  return (
    <nav className="header">
      <img src={img} className="logo center" alt="logo" />
      <h1>Project name</h1>
      <Popup
        trigger={LoginButton}
        // trigger={<button className="login ">LOG IN</button>}
        position="top center"
      >
        <LoginForm login={props.login} />
      </Popup>
    </nav>
  );
};
