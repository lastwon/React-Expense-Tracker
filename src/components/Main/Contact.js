import React from "react";
import Footer from "../Footer";
import { FaWallet } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="section-fourth">
        <h2>Support & Feedback</h2>
        <ul className="support-cards">
          <li>
            <FaWallet />
            <h3>Tracker Help Center</h3>
            <p>
              Browse our help articles to quickly find answers to your questions
              or contact our team.
            </p>
            <button className="green">More</button>
          </li>
          <li>
            <BsSpeedometer />
            <h3>Board Help Center</h3>
            <p>
              Browse our help articles to quickly find answers to your questions
              or contact our team.
            </p>
            <button className="blue">More</button>
          </li>
          <li>
            <MdFeedback />
            <h3>Feedback</h3>
            <p>
              Let us know what you think. Share your thoughts and suggestions
              with us to help improve Wallet for everyone.
            </p>
            <button className="dark">More</button>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
