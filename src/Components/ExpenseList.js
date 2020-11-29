import React from 'react';
import Expense from './Expense';
import '../Styles/Expense.css'

const ExpenseList = ({ expenses, onClick }) => {

    const handleClick = (i) => {
        onClick(i);
    }

    return (
        <div className="expenses-list">
            {console.log(expenses)}
            {expenses.expenses.length > 0 ? (
                <div>
                    {expenses.expenses.map(expense => (
                        <Expense
                            onClick={(id) => handleClick.bind(this, id)}
                            key={expense.id}
                            text={expense.expenseTitle}
                            amount={expense.amount}
                            id={expense.id} />
                    ))}
                </div>
            ) : ''}

        </div>
    )
}

export default ExpenseList;