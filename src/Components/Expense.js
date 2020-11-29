import React from 'react';
import '../Styles/Expense.css'

const Expense = ({ onClick, text, amount, id }) => {
    return (
        <div className="expense">
            <h1 className="title">{text}</h1>
            <h1 className="title">Rs.{amount}</h1>
            {/* <span className="material-icons delete button" onClick={onClick(id)}>
                delete
            </span> */}
        </div>
    )
}

export default Expense;