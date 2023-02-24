import React from "react";
import about from "./Images/about.png";
import center from "./Images/center.jpg";
import team from "./Images/team.jpg";
import { AiOutlineCaretRight } from "react-icons/ai";

import "./Main.css";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <div className="section-one">
        <div className="section-one__first--about">
          <h1>BudgetMakers</h1>
          <p>
            Is a fast growing fintech based in beautiful Lithuania, at the heart
            of Europe. We build top-of-class consumer and small business
            financial management apps, and we support other finance companies
            with powerful enterprise solutions for transaction categorization,
            tracking, budgeting, and more.
          </p>
        </div>
        <div className="section-one__second--mobile">
          <img src={about} alt="" />
        </div>
        <div className="section-one__second--pc">
          <img src={about} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="section-about">
          <ul className="section-three__cards--about">
            <li>
              <img src={team} alt="team" />
            </li>
            <li>
              <h2>We are</h2>
              <p style={{ color: "#757575" }}>
                A team of over 40 professionals and friends who are dedicated to
                making the world's very best finance management apps and APIs
                for fintech companies.
              </p>
              <p style={{ color: "#757575" }}>
                We value our intellectual freedom and flexibility, our respect
                for one another, and our many years of working together as a
                team.
              </p>
              <div className="buttonn">
                <button>
                  Meet our management{" "}
                  <AiOutlineCaretRight className="button-arrow__right" />
                </button>
              </div>
            </li>
          </ul>
          <ul className="section-three__cards--about">
            <li>
              <h2>Our Home base: Lithuania</h2>
              <p style={{ color: "#757575" }}>
                We were founded and are based in Lithuania, the capital of
                Vilnius, and the city of 1000 spires. Our city's ancient history
                inspires us to build a better future for one another, and to
                respect the traditions of our past. Vilnius Technology Culture
                means an attention to detail, security, usability, and strong
                technical infrastructure that lasts.{" "}
              </p>
            </li>
            <li>
              <img src={center} alt="center" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="section-about__2">
          <div className="section-two__second">
            <h2>Our story</h2>
          </div>
          <ul className="about-cards">
            <li>
              <h2>2014</h2>
              <p>
                BudgetMakers was officially founded by Jan “Honza” Muller, now
                CTO.
              </p>
            </li>
            <li>
              <h2>2016</h2>
              <p>BudgetMakers welcomes new CEO Michal Kratochvil.</p>
            </li>
          </ul>
          <ul className="about-cards">
            <li>
              <h2>2017</h2>
              <p>
                BudgetMakers had grown to cover over 80 countries, with hundred
                of thousands monthly users with more then 6 milions downloads of
                our app.
              </p>
            </li>
            <li>
              <h2>2018</h2>
              <p>
                BudgetMakers launches <b>Board</b>, our SME facing budgeting and
                cash flow app.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
