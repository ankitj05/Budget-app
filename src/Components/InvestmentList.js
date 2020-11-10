import React from 'react';
import Investment from './Investment';
import '../Styles/Investment.css'

const InvestmentList = ({ investments, onClick }) => {

    const handleClick = (i) => {
        onClick(i);
    }

    return (
        <div className="investment-list">
            {console.log(investments)}
            {investments.investments.length > 0 ? (
                <div>
                    {investments.investments.map(investment => (
                        <Investment
                            onClick={(id) => handleClick.bind(this, id)}
                            key={investment.id}
                            text={investment.investmentTitle}
                            amount={investment.amount}
                            id={investment.id} />
                    ))}
                </div>
            ) : ''}

        </div>
    )
}

export default InvestmentList;