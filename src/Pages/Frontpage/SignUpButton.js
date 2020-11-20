import React from "react";


//Pretty sure this component is dead i.e. not being used anywhere. 
export default (props) => (
  <div className="signUp">
    <p>Sign Up here</p>
    <button onClick={() => props.click()}>SIGN UP</button>
  </div>
);
