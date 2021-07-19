// sets the monthly budget.
import React, { useState, useContext } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const MonthlyBudget = () => {

    const [amount, setAmount] = useState('');
    const budgetContext = useContext(BudgetContext);

    const onChange = (e) => {
        setAmount(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Monthly budget set is : ${amount}`);
        budgetContext.updateBudget(amount);
    }

    return (
        <div>
            <form className="budget budget-form" onSubmit={onSubmit} autoComplete="off">
                <label className="budget-label">My Budget is Rs.</label>
                <input
                    className="budget-input"
                    type="number"
                    name="monthlyBudget"
                    value={amount}
                    onChange={onChange} />
            </form>
        </div>
    )
}

export default MonthlyBudget;
