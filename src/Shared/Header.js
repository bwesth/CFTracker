import React, { useContext, useState } from "react";
import img from "../Main/GreenFootLogo.png";
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
  const fb = useContext(UserContext).firebase;
  const [email, setEmail] = useState('john@mail.com')
	const [password, setPassword] = useState('123456')

  const LoginButton = () => {
    return (
      <div className="login">
        <button onClick={login}>LOGIN</button>
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
  async function login() {
		try {
      await fb.login(email, password)
      setUser({ name: "Mette", email: "hestepigen@climate.dk" })
			//props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
  }

  return (
    <nav className="header">
      <img src={img} className="logo center" alt="logo" />
      <h1>GREEN FEET</h1>
      {user.name ? LogoutButton() : LoginButton()}
    </nav>
  );
};
