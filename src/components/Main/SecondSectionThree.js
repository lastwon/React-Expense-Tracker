import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BiLock } from "react-icons/bi";

import "./Main.css";

const SecondSectionThree = () => {
  return (
    <div className="section-two__second">
      <h2>Why Tracker?</h2>
      <ul className="section-two__cards-2">
        <li>
          <AiOutlinePlusCircle className="icon-advanced" />
          <h2>Advanced</h2>
          <p>
            Tracker is simply smarter. We combine best-in-breed AI driven
            categorization and analytics with a deep set of features that are
            proven to work.
          </p>
        </li>
        <li>
          <HiOutlineUserAdd className="icon-userDriven" />
          <h2>User Driven</h2>
          <p>
            Tracker isn't a "system." You drive your own decision making
            process. Tracker learns from the user to provide only the data and
            tools you need most.
          </p>
        </li>
        <li>
          <BiLock className="icon-lock" />
          <h2>Private</h2>
          <p>
            BudgetMakers does not sell customer data to 3rd parties. Ever. Your
            data is yours. Our mission is to help you use it to lead a richer
            life.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SecondSectionThree;
