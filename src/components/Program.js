import { useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense/NewExpense";
import Footer from "./Footer";
import "./Expenses.css";

const DUMMY_EXPENSES = [];

const Program = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
      <Footer />
    </>
  );
};

export default Program;
