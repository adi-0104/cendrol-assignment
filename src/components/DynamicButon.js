import React, { useEffect, useRef, useState } from "react";
import "./DynamicButton.css";

const DynamicButon = () => {
  let [boolean, setBoolean] = useState(true);
  const handleButtonClick = () => {
    setBoolean((prevState) => !prevState);
  };
  let buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.style.backgroundColor = boolean ? "red" : "blue";
  }, [boolean]);
  return (
    <button
      ref={buttonRef}
      className="dynamic-button"
      onClick={handleButtonClick}
    >
      Value: {boolean ? "True" : "False"}
    </button>
  );
};

export default DynamicButon;
