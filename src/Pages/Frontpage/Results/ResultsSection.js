import React from "react";
import right1 from "./img/right/BANNEREDGE1.png";
import right2 from "./img/right/BANNEREDGE2.png";
import right3 from "./img/right/BANNEREDGE3.png";
import right4 from "./img/right/BANNEREDGE4.png";
import left1 from "./img/left/BANNEREDGE1.png";
import left2 from "./img/left/BANNEREDGE2.png";
import left3 from "./img/left/BANNEREDGE3.png";
import left4 from "./img/left/BANNEREDGE4.png";

export default (props) => {
  let right = [right1, right2, right3, right4];
  let left = [left1, left2, left3, left4];

  function getRandImg(imgs) {
      let rand = Math.floor(Math.random() * imgs.length)
      console.log(rand)
    return imgs[rand];
  }

  let leftStyle = {
      position: "fixed",
      left: "0",
      bottom: "0",
      webkitTransform: "scaleX(-1)",
      transform: "scaleX(-1), translateX(-50%)",
      margin: "0",
      padding: "0",
    },
    rightStyle = {
      position: "fixed",
      right: "0",
      bottom: "0",
      margin: "0",
      padding: "0",
      transform: "translateX(-50%)",
    },
    wrapper = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "300px",
      backgroundImage:
        "url(" + getRandImg(right) + "), url(" + getRandImg(left) + ")",
      backgroundPosition: "right bottom, left bottom",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "150px, 150px",
    };

  return (
    <div style={wrapper}>
      {props.children}
      {/* <img style={left} src={getRandImg()} />
      <img style={right} src={getRandImg()} /> */}
    </div>
  );
};
