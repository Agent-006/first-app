import React from "react";
import "./possibility.css";

import possibilityImage from "../../assets/possibility.png";

const Posssibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilies are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dicta amet rem magni, id corrupti.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Posssibility;
