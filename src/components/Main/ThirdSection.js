import React from "react";

import ship from "./Images/ship.jpg";
import friends from "./Images/friends.jpg";

import "./Main.css";

const ThirdSection = () => {
  return (
    <div className="section-three">
      <h2>Leading a Richer Life</h2>
      <ul className="section-three__cards">
        <li>
          <img src={ship} alt="ship" />
        </li>
        <li>
          <h2>
            Our mission at BudgetMakers is to help you{" "}
            <span className="section-three__words">lead a richer life</span>.
          </h2>
          <p>
            Building a picture of all your assets, monitoring your money and
            controlling your spending has one purpose, and one purpose only: to
            lead to a richer life.
          </p>
        </li>
      </ul>
      <ul className="section-three__cards">
        <li>
          <h2>
            A rich life isn't just about money.{" "}
            <span className="section-three__words">
              It's about how you use it
            </span>
            .
          </h2>
        </li>
        <li>
          <img src={friends} alt="ship" />
        </li>
      </ul>
    </div>
  );
};

export default ThirdSection;
