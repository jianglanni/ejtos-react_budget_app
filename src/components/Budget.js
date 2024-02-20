import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const buttonHandler = () => {
        if (totalExpenses <= newBudget)
            dispatch({type: 'SET_BUDGET', payload: newBudget});
        else
            alert("Don't cut the budget below current expense, bro!")
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<button onClick={buttonHandler}>Confirm Budget</button>
</div>
    );
};
export default Budget;
