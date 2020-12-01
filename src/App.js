import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, removeExpense, addInvestment, removeInvestment, getTotalExpense, getTotalInvestment } from './actions';
import ExpenseList from './Components/ExpenseList';
import InvestmentList from './Components/InvestmentList';

function App() {

  const expenseList = useSelector(state => state.expense);
  const investmentList = useSelector(state => state.investment);
  const dispatch = useDispatch();
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [investmentTitle, setInvestment] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [budget, setBudget] = useState(0);
  const [amount, setAmount] = useState(0);
  var totalExpense = expenseList.totalExpense;
  var totalInvestment = investmentList.totalInvestment;


  const updateExpense = (e) => {
    setExpenseTitle(e.target.value);
  }

  const updateExpenseAmount = (e) => {
    setExpenseAmount(e.target.value)
  }

  const getExpense = (e) => {
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
    console.log(expenseList.totalExpense);
    setExpenseTitle('');
    setExpenseAmount('');
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
    setInvestmentAmount('');
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

  const updateBudget = (e) => {
    e.preventDefault();
    setBudget(amount);
    // setAmount(0);
  }

  const updateAmount = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="App">
      <h1>Budget Tool</h1>

      <div className="budget">
        <form onSubmit={updateBudget} autoComplete="off">My Budget is Rs.
          <input
            className="budget-input"
            type="text"
            name="budget"
            value={amount}
            placeholder={' '}
            onChange={updateAmount} />
        </form>
      </div>

      <div className="expense-entry">
        <div className="name">Expenses
          <form className="box" onSubmit={getExpense} autoComplete="off">
            <input
              className="input"
              type="text"
              name="expense"
              value={expenseTitle}
              placeholder={'Title'}
              onChange={updateExpense} />
            <input
              className="input"
              type="number"
              name="amount"
              value={expenseAmount}
              placeholder={'Rs'}
              onChange={updateExpenseAmount} />
            <button type="submit">Add</button>
          </form>
        </div>

        <ExpenseList expenses={expenseList} onClick={(id) => handleDeleteExpense(id)} />
      </div>

      <div className="investment-entry">
        <div className="name">Investments
          <form className="box" onSubmit={getInvestment} autoComplete="off">
            <input
              className="input"
              type="text"
              name="investement"
              value={investmentTitle}
              placeholder={'Title'}
              onChange={updateInvestment} />
            <input
              className="input"
              type="number"
              name="amount"
              value={investmentAmount}
              placeholder={'Rs'}
              onChange={updateInvestmentAmount} />
            <button type="submit">Add</button>
          </form>
        </div>
        <InvestmentList investments={investmentList} onClick={(id) => handleDeleteInvestment(id)} />
      </div>

      <div className="remaining">
        <h2>Remaining Budget of Rs. {budget - totalExpense - totalInvestment}</h2>
      </div>
    </div>
  );
}

export default App;
