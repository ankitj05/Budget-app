import React from 'react';
import '../Styles/Investment.css'

const Investment = ({ onClick, text, amount, id }) => {
    return (
        <div className="investment">
            <h1 className="title">{text}</h1>
            <h1 className="title">Rs.{amount}</h1>
            {/* <button
                className="button"
                type="button"
                onClick={onClick(id)}>Delete</button> */}
            {/* <button
                className="button"
                type="button"
                onClick={onClick(id)}>Edit</button> */}
        </div>
    )
}

export default Investment;