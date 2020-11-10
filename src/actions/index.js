let nextExpenseId = 0
let nextInvestmentId = 0

export const addExpense = (expenseTitle, amount) => {
    return {
        type: 'ADD_EXPENSE',
        amount,
        expenseTitle,
        id: nextExpenseId++
    }
}

export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const getTotalExpense = () => {
    return {
        type: 'TOTAL_EXPENSE'
    }
}

export const addInvestment = (investmentTitle, amount) => {
    return {
        type: 'ADD_INVESTMENT',
        amount,
        investmentTitle,
        id: nextInvestmentId++
    }
}

export const removeInvestment = (id) => {
    return {
        type: 'REMOVE_INVESTMENT',
        id
    }
}

export const getTotalInvestment = () => {
    return {
        type: 'TOTAL_INVESTMENT'
    }
}
