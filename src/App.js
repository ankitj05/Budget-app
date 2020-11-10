import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, removeExpense, addInvestment, removeInvestment, getTotalExpense, getTotalInvestment } from './actions';
import ExpenseList from './Components/ExpenseList';
import InvestmentList from './Components/InvestmentList';

function App() {

  const expenseList = useSelector(state => state.expense);
  const investmentList = useSelector(state => state.investment);
  const totalExpense = useSelector(state => state.totalExpenses);
  const totalInvestment = useSelector(state => state.totalInvestments);
  const dispatch = useDispatch();
  const [expenseTitle, setExpense] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [investmentTitle, setInvestment] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [budget, setBudget] = useState(0);

  const updateExpense = e => {
    setExpense(e.target.value);
  }

  const updateExpenseAmount = e => {
    setExpenseAmount(e.target.value)
  }

  const getExpense = e => {
    e.preventDefault();
    if (!expenseTitle || !expenseTitle.replace(/\s/g, '').length) {
      alert("Please enter the expense title");
      return;
    }
    if (expenseAmount === 0) {
      alert('Please enter the expense amount')
      return;
    }
    dispatch(addExpense(expenseTitle, expenseAmount));
    dispatch(getTotalExpense());
    console.log(totalExpense);
    setExpense('');
    setExpenseAmount(0);
  }

  const updateInvestment = e => {
    setInvestment(e.target.value);
  }

  const updateInvestmentAmount = e => {
    setInvestmentAmount(e.target.value)
  }

  const getInvestment = e => {
    e.preventDefault();
    if (!investmentTitle || !investmentTitle.replace(/\s/g, '').length) {
      alert("Please enter the investment title");
      return;
    }
    if (investmentAmount === 0) {
      alert('Please enter the investment amount')
      return;
    }
    dispatch(addInvestment(investmentTitle, investmentAmount));
    dispatch(getTotalInvestment());
    setInvestment('');
    setInvestmentAmount(0);
  }

  const handleDeleteExpense = (id) => {
    console.log(`button clicked. ${id}`);
    dispatch(removeExpense(id))
    dispatch(getTotalExpense());
  }

  const handleDeleteInvestment = (id) => {
    console.log(`button clicked. ${id}`);
    dispatch(removeInvestment(id))
    dispatch(getTotalInvestment());
  }

  const getBudget = (e) => {
    e.preventDefault();
    setBudget(e.target.value);
  }

  const updateBudget = e => {
    setBudget(e.target.value);
  }

  return (
    <div className="App">
      <h1>Budget Tool</h1>

      <div className="budget">
        <form onSubmit={getBudget}>My Budget is
        <input
            type="text"
            name="budget"
            value={budget}
            placeholder={'Budget'}
            onChange={updateBudget} />
          {/* <button type="submit"></button> */}
        </form>
      </div>

      <div className="entry">
        <div className="expense-entry">
          <form onSubmit={getExpense}>Expenses
        <input
              type="text"
              name="expense"
              value={expenseTitle}
              placeholder={'Expense Title'}
              onChange={updateExpense} />
            <input
              type="number"
              name="amount"
              value={expenseAmount}
              placeholder={0}
              onChange={updateExpenseAmount} />
            <button type="submit">Add</button>
          </form>
        </div>

        <div className="investment entry">
          <form onSubmit={getInvestment}>Investment
        <input
              type="text"
              name="investement"
              value={investmentTitle}
              placeholder={'Investment Title'}
              onChange={updateInvestment} />
            <input
              type="number"
              name="amount"
              value={investmentAmount}
              placeholder={0}
              onChange={updateInvestmentAmount} />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>

      <div className="lists">
        <ExpenseList expenses={expenseList} onClick={(id) => handleDeleteExpense(id)} />
        <InvestmentList investments={investmentList} onClick={(id) => handleDeleteInvestment(id)} />
      </div>

      {/* <div className="remaining">
        <h2>Budget left: {}</h2>
      </div> */}
    </div>
  );
}

export default App;
