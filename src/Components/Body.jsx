import React, { useState } from "react";
import "../index.css";

const Body = (props) => {
  // const [backgroundChange, setBackgroundChange] = useState("");
  // const backgroundChange = props.changeColor1 + props.changeColor2;

  // const changeBackgroundColor = () => {
  //   setBackgroundChange(backgroundChange);
  // };

  // const changeBackgroundColor = () => {
  //   const style = {
  //     // backgrondImage: "liner-gradient(to right, {props.changeColor1}, {props.changeColor2})",
  //     backgroundIimage:
  //       "linear-gradient(to right, {props.changeColor1}, {props.changeColor2})",
  //   };
  return (
    <div
      type="color"
      name="gradient"
      style={{
        backgroundImage:
          "liner-gradient(to right (props.color1, props.color2))",
      }}
    ></div>
  );
};

export default Body;
