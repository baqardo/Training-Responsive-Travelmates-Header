import React, { Component } from "react";

import "./Navigation.scss";

import logo from "../../assets/svg/logo.svg";

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo-container">
          <a className="nav__logo" href="#home">
            <img className="nav__logo-icon" src={logo} alt="logo" />
            <span className="nav__logo-text">TripMate</span>
          </a>
        </div>
        <ul className="nav__link-list">
          <li className="nav__link-wrapper">
            <a className="nav__link nav__link--active" href="#home">
              Home
            </a>
          </li>
          <li className="nav__link-wrapper">
            <a className="nav__link" href="#home">
              Members
            </a>
          </li>
          <li className="nav__link-wrapper">
            <a className="nav__link" href="#home">
              About Us
            </a>
          </li>
          <li className="nav__link-wrapper">
            <a className="nav__link" href="#home">
              Testimonials
            </a>
          </li>
          <li className="nav__link-wrapper">
            <a className="nav__link" href="#home">
              Gallery
            </a>
          </li>
          <li className="nav__link-wrapper">
            <a className="nav__link" href="#home">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
