import React, { useState, useContext } from "react";
import "./dashboard.css";
import Menu from "./SideMenu";
import Survey from "./Survey/SurveyMenu";
import Home from "./Home/Home";
import Footprint from "./Footprint/Footprint";
import Pledges from "./Pledges/Pledges";
import News from "./News/News";
import Suggestions from "./Pledges/Suggestions";
import Settings from "./Settings/Settings";
import { UserContext } from "../../Main/UserContext";

export default () => {
  const [menuPlacement, setMenuPlacement] = useContext(UserContext)
  .menuPlacement,
    [wrapperClass, setWrapperClass] = useContext(UserContext).wrapperClass,
    menuItems = [
      { name: "Home", comp: <Home /> },
      { name: "Your footprint", comp: <Footprint /> },
      { name: "Pledges", comp: <Pledges /> },
      { name: "News", comp: <News /> },
      { name: "Survey", comp: <Survey /> },
      {
        name: "Options",
        comp: (
          <Settings setMenuPlacement={[setMenuPlacement, setWrapperClass]} />
        ),
      },
    ],
    [displayItem, setDisplayItem] = useState(menuItems[0].comp),
    [user, setUsername] = useContext(UserContext).user;

  // console.log(user)

  return (
    <div className={wrapperClass}>
      <div className="dashboard">
        <div className="headliner">
          <p className="username">{user.name}</p>
          <h1>This is the Dashboard!</h1>
        </div>
        <div className="content">{displayItem}</div>
      </div>
      <Menu style={menuPlacement} click={setDisplayItem} items={menuItems} />
    </div>
  );
};
