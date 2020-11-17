import React, { useContext, useState } from "react";
import img from "../Main/GreenFootLogo.png";
// import LoginForm from "../Pages/Frontpage/LoginForm";
// import Popup from "reactjs-popup";
import { UserContext } from "../Main/UserContext";

import PopupWrapper from "../Pages/Frontpage/PopupWrapper";
import LoginForm from "../Pages/Frontpage/LoginForm";

// const loginPopupForm = (props) => <Popup
//   trigger={LoginButton}
//   // trigger={<button className="login ">LOG IN</button>}
//   position="top center"
//   >
//         <LoginForm login={props.login} />
//   </Popup>

export default (props) => {
  //const [user, setUser] = useContext(UserContext).user;
  const fb = useContext(UserContext).firebase;
  const [loggedIn, setLoggedIn] = useContext(UserContext).loggedIn;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function logout() {
		await fb.logout()
    setLoggedIn(false)
    console.log(fb.getCurrentUsername());
	}

  const LoginButton = () => {
    return (
      <div className="login">
        <button >LOGIN</button>
      </div>
    );
  }; 

  const popup = (
    <PopupWrapper trigger={LoginButton}>
      <LoginForm />
    </PopupWrapper>
  );
  
  const LogoutButton = () => {
    return (
      <div className="login">
        <button onClick={() => logout()}>LOGOUT</button>
      </div>
    );
  };

  //console.log(user);
  /* async function login() {
		try {
      await fb.login(user[1], user[2])
      setUser({ name: fb.getCurrentUsername(), email: email })
		} catch(error) {
			alert(error.message)
		}
  } */

  return (
    <nav className="header">
      <img src={img} className="logo center" alt="logo" />
      <h1>GREEN FEET</h1>
     
      {loggedIn ? LogoutButton() :  popup }
    </nav>
  );
};
