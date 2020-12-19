import React, { useContext } from "react";
import img from "../Main/GreenFootLogo.png";
import { UserContext } from "../Main/UserContext";

import PopupWrapper from "../Pages/Frontpage/PopupWrapper";
import LoginForm from "../Pages/Frontpage/LoginForm";

export default () => {
  const fb = useContext(UserContext).firebase;
  const [loggedIn, setLoggedIn] = useContext(UserContext).loggedIn;
  const [userPledges, setPledges] = useContext(UserContext).pledges;
  const setSurveyChoices = useContext(UserContext).setSurveyChoices;

  async function logout() {
    setPledges({
      transport: [],
      food: [],
      goods: [],
      household: [],
    });
    setSurveyChoices(new Array(12).fill(4));
    await fb.logout();
    setLoggedIn(false);
  }

  const LoginButton = () => {
    return (
      <div className="login">
        <button>LOGIN</button>
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

  return (
    <nav className="header">
      <img src={img} className="logo center" alt="logo" />
      <h1>GREEN FEET</h1>

      {loggedIn ? LogoutButton() : popup}
    </nav>
  );
};
