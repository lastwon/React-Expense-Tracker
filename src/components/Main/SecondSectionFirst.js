import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiBankFill } from "react-icons/ri";

import "./Main.css";

const SecondSectionFirst = () => {
  return (
    <ul className="section-two__first">
      <li>
        <h2>6.5 M</h2>
        <p>
          <FaUserAlt className="icon-user" /> Downloads
        </p>
      </li>
      <li>
        <h2>4.7</h2>
        <p>
          <FaStar className="icon-star" /> Rating
        </p>
      </li>
      <li>
        <h2>20 +</h2>
        <p>
          <TbWorld className="icon-world" /> Languages
        </p>
      </li>
      <li>
        <h2>15 K</h2>
        <p>
          <RiBankFill className="icon-bank" /> Banks Connect
        </p>
      </li>
    </ul>
  );
};

export default SecondSectionFirst;
