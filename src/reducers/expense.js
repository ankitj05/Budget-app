let initialState = {
    expenses: []
}

const expense = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return Object.assign({}, state, {
                expenses: [{
                    expenseTitle: action.expenseTitle,
                    id: action.id,
                    amount: action.amount
                }, ...state.expenses]
            })

        case 'REMOVE_EXPENSE':
            return Object.assign({}, state, {
                expenses: state.expenses.filter((expense) => {
                    return expense.id !== action.id
                })
            })

        case 'TOTAL_EXPENSE':
            let total = 0;
            state.expenses.forEach((expense) => total += parseInt(expense.amount));
            return Object.assign({}, state, {
                totalExpense: total
            })

        default:
            return state;
    }
}

export default expense;