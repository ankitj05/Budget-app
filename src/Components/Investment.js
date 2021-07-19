import React from 'react';
import '../Styles/Investment.css'

const Investment = ({ onClick, text, amount, id }) => {
    return (
        <div className="investment">
            <h1 className="title">{text}</h1>
            <h1 className="title">Rs.{amount}</h1>
            <span className="material-icons delete button" onClick={onClick(id)}>
                delete
            </span>
        </div>
    )
}

export default Investment;