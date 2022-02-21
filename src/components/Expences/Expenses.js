import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2019');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    }
  const filterdExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {filterdExpenses.map(
          (expenses) => 
          <ExpenseItem 
            key = {expenses.id}
            title = {expenses.title}
            amount = {expenses.amount}
            date = {expenses.date}
          />
        )}
      </Card>
    </div>
    
  );
}

export default Expense;
