import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Images/logo.png";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <div className="nav-list__brand">
            <NavLink to="/">
              <img src={logo} alt="logo" />
              Budget
              <span className="icon-part">Makers</span>
            </NavLink>
          </div>
        </li>
        <div className="nav-list__links">
          <li>
            <NavLink to="/program">Get Started</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Support</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
