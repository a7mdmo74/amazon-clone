import React from "react";
import hero from "../../assets/img/home-bg.jpg";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="amazon__hero">
      <div className="container-fluid">
        <div className="amazon__hero-img">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
