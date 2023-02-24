import React from "react";
import googlePlay from "../components/Main/Images/google-play.png";
import appleStore from "../components/Main/Images/app-store.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-store__icons">
          <img src={googlePlay} alt="google-play" />
          <img src={appleStore} alt="apple-store" />
        </div>
        &#169; Dainius Strazdas. All rights reserved.
        <a href="https://dainiusstrazdas.tech">Back To Portfolio</a>
      </div>
    </>
  );
};

export default Footer;
