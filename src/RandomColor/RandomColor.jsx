import React, { useState } from "react";
import Title from "../components/Title";
import CopyButton from "../components/CopyButton";

const RandomColor = () => {
  const [fontColor, setFontColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#fff");
  const [buttonBgColor, setButtonBgColor] = useState("#007bff");
  const [buttonColor, setButtonColor] = useState("#fff");

  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  const getRandomColor = (e) => {
    setFontColor(randomColor());
    setBgColor(randomColor());
    setButtonBgColor(randomColor());
    setButtonColor(randomColor());

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    e.target.style.backgroundColor = buttonBgColor;
    e.target.style.color = buttonColor;
  };

  return (
    <div>
      <Title text={"Random Color Generation"} classes={"title"} />
      <div style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
        <button className="btnStyle" onClick={getRandomColor}>
          RANDOM COLOR
        </button>
      </div>
      <div
        style={{
          border: `2px solid ${fontColor}`,
          width: "20rem",
          margin: "1rem auto",
          textAlign: "left",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontSize: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          Colors Information
        </h2>
        <div className="colorInfoStyle">
          <p>Font Color: </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>{fontColor}</p>
            <CopyButton colorCode={fontColor} />
          </div>
        </div>
        <div className="colorInfoStyle">
          <p>Background Color: </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>{bgColor}</p>
            <CopyButton colorCode={bgColor} />
          </div>
        </div>
        <div className="colorInfoStyle">
          <p>Button Background Color: </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>{buttonBgColor}</p>
            <CopyButton colorCode={buttonBgColor} />
          </div>
        </div>
        <div className="colorInfoStyle">
          <p>Button Color: </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>{buttonColor}</p>
            <CopyButton colorCode={buttonColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
