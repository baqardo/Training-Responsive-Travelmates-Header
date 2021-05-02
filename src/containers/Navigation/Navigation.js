import React, { Component } from "react";

import "./Navigation.scss";

import logo from "../../assets/svg/logo.svg";

class Navigation extends Component {
  state = { burgerActive: false };

  toggleBurger = () => {
    document.body.classList.toggle("no-overflow");

    this.setState(oldState => {
      return { burgerActive: !oldState.burgerActive };
    });
  };

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

        <a
          href="#home"
          className={`nav__burger ${this.state.burgerActive ? "nav__burger--active" : ""}`}
          onClick={this.toggleBurger}>
          <div className="nav__burger-line"></div>
          <div className="nav__burger-line"></div>
          <div className="nav__burger-line"></div>
        </a>

        <div className={`nav__mobile ${this.state.burgerActive ? "nav__mobile--visible" : ""}`}>
          <ul className={`nav__mobile-list ${this.state.burgerActive ? "nav__mobile-list--visible" : ""}`}>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Home
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Members
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                About Us
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Testimonials
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Gallery
              </a>
            </li>
            <li className="nav__mobile-item">
              <a className="nav__link nav__link--mobile" href="#home" onClick={this.toggleBurger}>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
