import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmmout = 250.44;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmmout}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
