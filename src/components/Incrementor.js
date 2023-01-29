import React, { useState } from "react";
import "./Incrementor.css";
const Incrementor = () => {
  const [cendol, setCendol] = useState(2);

  const incrementByFactor = (factor) => {
    //increment by 10
    setCendol((prevValue) => prevValue + factor);
  };
  return (
    <div className="parent-component">
      <h4>Component A</h4>
      <ChildIncrementor value={cendol} incrementByFactor={incrementByFactor} />
    </div>
  );
};

const ChildIncrementor = ({ value, incrementByFactor }) => {
  let factor = 10;
  const handleClick = (factor, event) => {
    event.stopPropagation();
    incrementByFactor(factor);
  };
  return (
    <div className="child-component">
      <h4>Component B</h4>
      <div>cendol: {value}</div>
      <button
        className="increment-button"
        onClick={(e) => handleClick(factor, e)}
      >
        Increment By {factor}
      </button>
    </div>
  );
};

export default Incrementor;
