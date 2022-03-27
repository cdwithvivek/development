import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem =(props)=> {
    
    // let [newTitle,setNewTitle] = useState('');
    // let [title,setTitle] = useState(props.title)
    // // event handler
    // const clickHandler = () =>{
    //     if(newTitle !== '')
    //         setTitle(newTitle)
    //     setNewTitle('')
    // }
    // const changeHandler = (e) =>{
    //     setNewTitle(e.target.value)
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date= {props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}/> */}
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}



export default ExpenseItem;