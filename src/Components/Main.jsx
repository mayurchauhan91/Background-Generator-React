import React, { useState } from "react";
import "../index.css";

const Main = () => {
  const [color1, setColor1] = useState("#2193b0");
  const [color2, setColor2] = useState("#6dd5ed");

  const changeColor1 = (e) => {
    setColor1(e.target.value);
  };
  const changeColor2 = (e) => {
    setColor2(e.target.value);
  };

  return (
    <div
      className="main-body"
      style={{
        background: "linear-gradient(to right (color1.value + color2.value)",
      }}
    >
      <div className="card text-center">
        <div className="card-header">
          <h1 className="heading">Background Color Generator</h1>
        </div>
        <div className="card-body">
          <input
            type="color"
            name="color1"
            className="color1 pulse color-pick"
            value={color1}
            onChange={changeColor1}
          />
          <input
            type="color"
            name="color2"
            className="color2 pulse color-pick"
            value={color2}
            onChange={changeColor2}
          />

          <h5 className="card-title">Pick your color</h5>
          <p className="card-text">
            linear-gradient(to right, rgb ({color1 + ", " + color2}))
          </p>
        </div>
        <div className="card-footer text-muted">
          <a
            target="_blank"
            href="https://github.com/mayurchauhan91"
            className=" btn btn-primary"
          >
            Developed by @Mayur Chauhan{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
