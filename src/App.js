import { useState } from 'react';  //required for adding newly created expense to expenses array, 
// which can only be done by changing state which leads to re-rendering of component

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const expenses = [
  {
    id: 'e1',
    title: 'Pasta',
    amount: '150',
    date: new Date(2021, 11, 13) //year-month-day
  },
  {
    id: 'e2',
    title: 'Mushroom',
    amount: '200',
    date: new Date(2020, 10, 10)
  },
  {
    id: 'e3',
    title: 'Makeup',
    amount: '1500',
    date: new Date(2019, 3, 3)
  },
  {
    id: 'e4',
    title: 'Book',
    amount: '900',
    date: new Date(2019, 6, 2)
  }
]

function App(){
  const[expenseArr, setExpenseArr]= useState(expenses)

  function addExpenseHandler(expense){
    setExpenseArr((original_expenseArr)=>{
      return [expense, ...original_expenseArr] //adding newly created expense object to expenses array
    })
  }

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses DummyExpenses={expenseArr}/>
    </div>
  )
}

export default App;



















// // root component
// import React, {useState} from "react";

// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";

  // const DUMMY_INITIAL_EXPENSES = [
  //   {
  //     id: 'e1',
  //     title: 'Pasta',
  //     amount: '150',
  //     date: new Date(2021, 11, 13)
  //   },
  //   {
  //     id: 'e2',
  //     title: 'Mushroom',
  //     amount: '200',
  //     date: new Date(2020, 10, 10)
  //   },
  //   {
  //     id: 'e3',
  //     title: 'Makeup',
  //     amount: '1500',
  //     date: new Date(2019, 3, 3)
  //   }
  // ]

// function App() {
//   const [expenses, setExpenses]= useState(DUMMY_INITIAL_EXPENSES)

//   const AddExpenseHandler=(expenseData)=>{
//     // now to add newly created expense to DUMMY_INITIAL_EXPENSES(previous state), 
//     // can't directly update like setExpenses([expenseData, ...expenses]). 
//     // If u update ur state depending ur previous state, Gotto use function inside setExpenses and 
//     // tht func will automatically receive latest state snapshot(prevState)
//     setExpenses((prevExpenses)=>{
//       return [expenseData, ...prevExpenses]
//     })

//   }

//   return (
//     <div>
//       <NewExpense onAddExpense={AddExpenseHandler}/>
//       <Expenses exp={expenses}/>
      
//     </div>
//   );
// }

// export default App;