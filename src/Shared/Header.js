import React, { useContext } from "react";
import img from "../Main/carbon-footprint-730x410.jpg";
// import LoginForm from "../Pages/Frontpage/LoginForm";
// import Popup from "reactjs-popup";
import { UserContext } from "../Main/UserContext";

// const loginPopupForm = (props) => <Popup
//   trigger={LoginButton}
//   // trigger={<button className="login ">LOG IN</button>}
//   position="top center"
//   >
//         <LoginForm login={props.login} />
//   </Popup>

export default (props) => {
  const [user, setUser] = useContext(UserContext).user;

  const LoginButton = () => {
    return (
      <div className="login">
        <button onClick={() => setUser({ name: "Mette", email: "hestepigen@climate.dk" })}>LOGIN</button>
      </div>
    );
  }; 

  
  const LogoutButton = () => {
    return (
      <div className="login">
        <button onClick={() => setUser({ name: undefined, email: undefined })}>LOGOUT</button>
      </div>
    );
  };

  console.log(user);

  return (
    <nav className="header">
      <img src={img} className="logo center" alt="logo" />
      <h1>MY CLIMATE ACTION</h1>
      {user.name ? LogoutButton() : LoginButton()}
    </nav>
  );
};
