import React, { useContext } from "react";
import { UserContext } from "../../Main/UserContext";

export default () => {
    const [user, setUsername] = useContext(UserContext).user;

  // console.log(user)

  return (
    <div className="Dashboard">
      
    </div>
  );
};
