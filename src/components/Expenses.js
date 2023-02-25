import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  return (
    <div>
      <div>
        <ExpenseFilter
          selected={selectYear}
          onSelectedYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 && (
          <p className="expenses-error">No expenses found.</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </div>
    </div>
  );
};

export default Expenses;
