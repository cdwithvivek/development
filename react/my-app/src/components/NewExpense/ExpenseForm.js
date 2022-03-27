import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // states
    let [enterTitle,NewTitle] = useState('')
    let [enterAmount,NewAmount] = useState('')
    let [enterDate,NewDate] = useState('')
   
    const changeHandler = (e) => {
        let type = e.target.type;
        let val = e.target.value
        if(type === 'text'){
            NewTitle(val)
            
        }
        else if( type === 'number'){
            NewAmount(val)
            
        }
        else {
            NewDate(val)
            
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        //adding the data in object
        const expenseDate = {
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        }
        // reseting the fileds
        NewTitle('')
        NewDate('')
        NewAmount('')
        //cheating -> calling parent function which has child data
        //so we can access child data in parent awesome :)
        props.onSaveExpenseData(expenseDate);
        
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enterAmount}   step="1" onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enterDate} onChange={changeHandler}/>
                </div>
            </div>
            {/* submit */}
            <div className="new-expense__action">
                <button  type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;