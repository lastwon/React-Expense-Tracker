import React from "react";
import SecondSectionTwo from "./SecondSectionTwo";
import SecondSectionFirst from "./SecondSectionFirst";
import SecondSectionThree from "./SecondSectionThree";

import "./Main.css";

const SecondSection = () => {
  return (
    <div className="section-two">
      <SecondSectionFirst />
      <SecondSectionTwo />
      <SecondSectionThree />
    </div>
  );
};

export default SecondSection;
