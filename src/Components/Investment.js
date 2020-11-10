import React from 'react';
import '../Styles/Investment.css'

const Investment = ({ onClick, text, amount, id }) => {
    return (
        <div className="investment">
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

export default Investment;