import {
    UPDATE_BUDGET,
    REMAINING_BUDGET
} from '../../types';

const BudgetReducer = (state, action) => {
    switch (action.type) {


        case UPDATE_BUDGET:
            return {
                ...state,
                budget: action.payload,
                remainingBudget: action.payload
            }

        default:
            return state
    }
}

export default BudgetReducer;

