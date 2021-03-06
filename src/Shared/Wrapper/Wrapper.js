import React from "react";
import right1 from "./img/right/BANNEREDGE1.png";
import right2 from "./img/right/BANNEREDGE2.png";
import right3 from "./img/right/BANNEREDGE3.png";
import right4 from "./img/right/BANNEREDGE4.png";
import left1 from "./img/left/BANNEREDGE1.png";
import left2 from "./img/left/BANNEREDGE2.png";
import left3 from "./img/left/BANNEREDGE3.png";
import left4 from "./img/left/BANNEREDGE4.png";

export default ({ direction, children }) => {
  let right = [right1, right2, right3, right4];
  let left = [left1, left2, left3, left4];

  function getRandImg(imgs) {
    let rand = Math.floor(Math.random() * imgs.length);
    return imgs[rand];
  }

  const wrapper = {
    flexDirection: direction || "row",
    backgroundImage:
      "url(" + getRandImg(right) + "), url(" + getRandImg(left) + ")",
    backgroundPosition: "right bottom, left bottom",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "250px, 250px",
  };

  return (
    <div className="wrapper" style={wrapper}>
      {children}
    </div>
  );
};
