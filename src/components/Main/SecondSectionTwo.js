import React from "react";

import "./Main.css";

const SecondSectionTwo = () => {
  return (
    <div className="section-two__second">
      <h2>Use Cases</h2>
      <ul className="section-two__cards">
        <li>
          <h2>Budgeting</h2>
          <p>Set unlimited daily, weekly, monthly, or one-time budgets.</p>
        </li>
        <li>
          <h2>Expense control</h2>
          <p>See every transaction, synced and categorized automatically.</p>
        </li>
        <li>
          <h2>Planning</h2>
          <p>
            Get ahead of the curve. Automated upcoming payment notifications.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SecondSectionTwo;
