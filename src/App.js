import './App.css';
import React, { useState } from 'react';
import MonthlyBudget from './Components/Budget/MonthlyBudget';
import BudgetState from './context/budget/BudgetState';
import AddAmount from './Components/SpendandSave/AddAmount';

function App() {

  return (
    <BudgetState>
      <div className="App">
        <div className="budget">
          <MonthlyBudget />
          <AddAmount />
        </div>
      </div>
    </BudgetState >
  );
}

export default App;
