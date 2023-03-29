import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{  //prop is onAddExpense
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)  //forward this data to App.js 
    }
    return(
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;









// import React, {useState} from 'react'

// import './NewExpense.css'
// import ExpenseForm from './ExpenseForm'

// const NewExpense=(props)=>{
//     const [isEditing, setIsEditing] = useState(false)   //initialy only btn is shown so isEditing on form is false

//     const saveExpenseDataHandler= (enteredExpenseData)=>{
//         const expenseData={
//             ...enteredExpenseData,  //spreaded out 
//             id: Math.random().toString()
//         }
//         props.onAddExpense(expenseData)
//         setIsEditing(false)
//     }

//     const startEditingHandler= () =>{
//         setIsEditing(true)
//     }
//     const stopEditingHandler = () =>{
//         setIsEditing(false)
//     }

//     const addExpenseBtn= <button onClick={startEditingHandler}>Add New Expense</button>
    
//     return (
//         <div className='new-expense'>
// {/* state is required here bcoz if form is submitted then addExpense btn shoudl b shown and when btn is clicked form should open */}
// {/* if isEditing is set to true, then render form comp(ExpenseForm comp) otherwise render btn */}
// {/*value for this prop should be a func, a func tht will be eventually triggered/called when something happens inside of ExpenseForm component*/}
//             {isEditing===true
//             ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel= {stopEditingHandler} />
//             : addExpenseBtn
//             }
//         </div>
//     )
// }
// export default NewExpense