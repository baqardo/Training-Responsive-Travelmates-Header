import React from "react";

import "./Header.scss";

import scrollIcon from "../../assets/svg/scroll.svg";

const Header = props => (
  <header className="header">
    <div className="header__cta">
      <div className="header__cta-title">
        <p className="header__cta-line">Explore the world</p>
        <p className="header__cta-line header__cta-line--pushed">with exciting people!</p>
      </div>
      <div className="header__cta-mission">
        We help people to find ideal company <br className="header__cta-break" /> for the joint trips
      </div>
      <a className="header__cta-btn" href="#home">
        Start
      </a>
    </div>

    <div className="header__steps">
      <div className="header__steps-item">
        <p className="header__steps-number">01</p>
        <p className="header__steps-title">Select Destination</p>
        <p className="header__steps-description">Search and find a destination to travel and refresh!</p>
      </div>
      <div className="header__steps-item">
        <p className="header__steps-number">02</p>
        <p className="header__steps-title">Find People</p>
        <p className="header__steps-description">
          Find the people who are travelling to the destination and connect with them
        </p>
      </div>
      <div className="header__steps-item">
        <p className="header__steps-number">03</p>
        <p className="header__steps-title">Explore</p>
        <p className="header__steps-description">Experience the Journey with like-minded people!</p>
      </div>
    </div>

    <div className="header__more">
      <p className="header__more-text">Scroll to see more</p>
      <div className="header__more-scroll">
        <img className="header__more-arrow" src={scrollIcon} alt="arrow  down" />
      </div>
    </div>
  </header>
);

export default Header;
