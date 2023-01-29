import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [colorChange, setColorChange] = useState(false);
  let buttonRef = useRef(null);

  const handleCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleColorChange = () => {
    setColorChange((prevState) => !prevState);
  };
  const bgColor = {
    backgroundColor: colorChange ? "#2EDEC2" : "#FCC202",
  };
  useEffect(() => {
    buttonRef.current.style.backgroundColor = colorChange
      ? "#FCC202"
      : "#2EDEC2";
  });

  return (
    <div className="counter-wrapper">
      <div className="counter-box">
        <div className="counter-button" style={bgColor}>
          <p id="counter">{counter < 10 ? `0${counter}` : counter}</p>
          <span id="counter-span" onClick={handleCounter}>
            Click to increase counter
          </span>
        </div>
      </div>
      <button
        ref={buttonRef}
        className="color-button"
        onClick={handleColorChange}
      >
        Change Color
      </button>
    </div>
  );
};

export default Counter;
