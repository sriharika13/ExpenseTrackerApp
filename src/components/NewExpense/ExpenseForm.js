import {useState} from 'react'
import './ExpenseForm.css'

//form will contain title, amount, date
const ExpenseForm = (props) => { //props is onSaveExpenseData
    const[enteredtitle, setTitle]= useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [form, setForm] = useState(false)

    function titleChangeHandler(event){
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            amount: enteredAmount,
            title: enteredtitle,
            date: new Date(enteredDate)
        }
        
        //2-way binding
        setEnteredAmount('')
        setEnteredDate('')
        setTitle('')

        //sending expenseData to parent comp where new ExpenseItem can be formed:
        props.onSaveExpenseData(expenseData);

        setForm(false);
    }
    const displayFormHandler=()=>{
        setForm(true);
    }
    const cancelHandler=()=>{
        setForm(false);
    }


    if(form===false){
        return(
            <button onClick={displayFormHandler}>Add New Expense</button>
        )
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>{/*div for single i/p */}
                        <label>Title</label>
                        <input type="text" value={enteredtitle} onChange={titleChangeHandler} required/>
                </div>

                <div className='new-expense__control'>{/*div for single i/p */}
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required/>
                </div>

                <div className='new-expense__control'>{/*div for single i/p */}
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} required/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={cancelHandler}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;



















// import { useState } from 'react'
// import './ExpenseForm.css'

// const ExpenseForm = (props) => {
//     const [enteredTitle, setEnteredTitle] = useState('')  //by default i/p field is a empty string be it a number or date
//     const [enteredAmount, setEnteredAmount] = useState('')
//     const [enteredDate, setEnteredDate] = useState('')

//     const titleChangeHandler = (event) => {
//         setEnteredTitle(event.target.value)  //this will save i/p entered on respective i/p fields
//     }
//     const amountChangeHandler = (event) => {
//         setEnteredAmount(event.target.value)
//     }
//     const dateChangeHandler = (event) => {
//         setEnteredDate(event.target.value)
//     }

//     const submitHandler = (event) => {
//         event.preventDefault()
//         const expenseData = { // using this object, create new expense 
//             title: enteredTitle,
//             amount: +enteredAmount,
//             date: new Date(enteredDate)  //converts date string to date object
//         }
//         //resetting values in i/p fields of form
//         props.onSaveExpenseData(expenseData)
//         setEnteredTitle('')
//         setEnteredAmount('')
//         setEnteredDate('')
//     }

//     return <form onSubmit={submitHandler}>
//         <div className='new-expense__controls'>  {/*div will contain all i/ps */}
//             <div className='new-expense__control'>{/*div for single i/p */}
//                 <label>Title</label>
//                 <input type="text" value={enteredTitle} onChange={titleChangeHandler} />  
//         {/*value property enables 2 way binding : we override what user entered after the form was submitted and hence cleared the i/p*/}
//             </div>
//             <div className='new-expense__control'>{/*div for single i/p */}
//                 <label>Amount</label>
//                 <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
//             </div>
//             <div className='new-expense__control'>{/*div for single i/p */}
//                 <label>Date</label>
//                 <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />  {/*min and max dates for filtering years in filter form */}
//             </div>
//             <div className='new-expense__actions'>
//                 {/*since props.onCancel is pointer to handler so it shouldnt be eecuted there */}
//                 <button type='button' onClick={props.onCancel}>Cancel</button>  
// {/* handler func is not written here bcoz we want to execute state changing func which is defined in parent comp so write handler in parent comp only */}
//                 <button type='submit'>Add Expense</button>
//             </div>
//         </div>
//     </form>
// }
// // if a button with type submit is pressed then form ele emits a event to which we listen -- to listen we use onSubmit event
// // we gotto prevent default behavior of form when form is submitted then 
// // browser automatically sends req to server which is hosting this web page(here developmnet server) 
// export default ExpenseForm