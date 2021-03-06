import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    // pass function as props and call in child and receive the data
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
        
    };
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}/>
            
        </div>
    );
    
};

export default NewExpense;