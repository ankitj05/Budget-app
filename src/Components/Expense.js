import React from 'react';
import '../Styles/Expense.css'

const Expense = ({ onClick, text, amount, id }) => {
    return (
        <div className="expense">
            <h1>{text} {amount}</h1>
            <button
                type="button"
                onClick={onClick(id)}>Delete</button>
            <button
                type="button"
                onClick={onClick(id)}>Edit</button>
        </div>
    )
}

export default Expense;