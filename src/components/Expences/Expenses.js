import React, { useState } from "react";

import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2019');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    }

  const filterdExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filterdExpenses} />
      </Card>
    </li>
    
  );
}

export default Expense;
