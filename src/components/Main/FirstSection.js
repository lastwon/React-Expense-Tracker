import React from "react";
import { NavLink } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";

import googlePlay from "./Images/google-play.png";
import appleStore from "./Images/app-store.png";

import phone from "./Images/phones.png";

import "./Main.css";

const FirstSection = () => {
  return (
    <div className="section-one">
      <div className="section-one__first">
        <h2>
          <span className="brand-what">Tracker</span>
          <br />
          by BudgetMakers <FaCommentDollar className="icon" />
        </h2>
        <h1>
          Your Finances
          <br />
          in One Place
        </h1>
        <div className="section-one__second--mobile">
          <img src={phone} alt="phones" />
        </div>
        <div className="store-icons">
          <img src={googlePlay} alt="google-play" />
          <img src={appleStore} alt="apple-store" />
        </div>
        <div className="button">
          <NavLink to="/program">
            <button>
              Get Started{" "}
              <AiOutlineCaretRight className="button-arrow__right" />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="section-one__second--pc">
        <img src={phone} alt="phones" />
      </div>
    </div>
  );
};

export default FirstSection;
