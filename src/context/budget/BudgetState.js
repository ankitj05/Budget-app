import {
    UPDATE_BUDGET,
    REMAINING_BUDGET
} from '../../types';

import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import BudgetReducer from './budgetReducer';

const BudgetState = (props) => {

    const initialState = {
        budget: '50000',
        remainingBudget: '50000'
    }

    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    const updateBudget = (value) => {

        dispatch({
            type: UPDATE_BUDGET,
            payload: value
        })
    }

    return <BudgetContext.Provider
        value={{
            budget: state.budget,
            remainingBudget: state.remainingBudget,
            updateBudget
        }}>
        {props.children}
    </BudgetContext.Provider>
}

export default BudgetState;