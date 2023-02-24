import React from "react";

import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";

const FourthSection = () => {
  return (
    <div className="section-fourth">
      <h2>Tracker Helps You:</h2>
      <ul className="section-fourth__cards">
        <li>
          <BsQuestionCircleFill className="icon-question" />
          <h3>Ask the Questions</h3>
          <p>Where does my money go? </p>
        </li>
        <li>
          <AiFillPieChart className="icon-data" />
          <h3>See the Data</h3>
          <p>Unlock key insights. </p>
        </li>
        <li>
          <AiFillClockCircle className="icon-time" />
          <h3>Be Efficient</h3>
          <p>No missed payments.</p>
        </li>
        <li>
          <BsFillBarChartFill className="icon-chart" />
          <h3>Have the Answers</h3>
          <p>Anytime, anywhere..</p>
        </li>
      </ul>
    </div>
  );
};

export default FourthSection;
