import React, { useState } from '.react';

const AddAmount = () => {

    const [particulars, setParticulars] = useState('');
    const [amount, setAmount] = useState();
    const [type, setType] = useState('');

    const onChange = (e) => {
        if (e.target.name === 'amount') {
            setAmount(e.target.value);
        }
        else if (e.target.name === 'particulars') {
            setParticulars(e.target.value);
        }
        else if (e.target.name === 'type') {
            setType(e.target.value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${particulars} amount: ${amount} type: ${type}`);
    }


    return (
        <div className="title">Expenses
            <form className="box" onSubmit={onSubmit} autoComplete="off">
                <input
                    className="input"
                    type="text"
                    name="expense"
                    value={particulars}
                    placeholder={'Title'}
                    onChange={onChange} />
                <input
                    className="input"
                    type="number"
                    name="amount"
                    value={amount}
                    placeholder={'Rs'}
                    onChange={onChange} />
                <input
                    className="input"
                    type="text"
                    name="type"
                    value={type}
                    placeholder={'Expense/Investment'}
                    onChange={onChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddAmount;