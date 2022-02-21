import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h1 className="expense-list__fallback">No Expenses found</h1>
  }
  return <ul className="expense-list">
      {
        props.items.map(
            (expenses) => 
            <ExpenseItem 
              key = {expenses.id}
              title = {expenses.title}
              amount = {expenses.amount}
              date = {expenses.date}
            />
          )
      }
  </ul>
}

export default ExpensesList;