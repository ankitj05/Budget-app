let initialState = {
    investments: [],
    totalInvestment: 0
}

const investment = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INVESTMENT':
            return Object.assign({}, state, {
                investments: [{
                    investmentTitle: action.investmentTitle,
                    id: action.id,
                    amount: action.amount
                }, ...state.investments]
            })

        case 'REMOVE_INVESTMENT':
            return Object.assign({}, state, {
                investments: state.investments.filter((investment) => {
                    return investment.id !== action.id
                })
            })

        case 'TOTAL_INVESTMENT':
            let total = 0;
            state.investments.forEach((investment) => total += parseInt(investment.amount));
            return Object.assign({}, state, {
                totalInvestment: total
            })

        default:
            return state;
    }
}

export default investment;