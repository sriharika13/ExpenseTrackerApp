import { useState } from "react";

import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'

function Expenses(props){
    const[filteredYear, setFilteredYear]= useState('2019')  //2019 is not kept as default when u refresh the page ,
    // so need to do 2way binding on form as value={props.selected}, sent form here

    function selectYearHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    const expenses=props.DummyExpenses;

    let filteredExpenses=expenses.filter(
        (expense)=>{
            return expense.date.getFullYear().toString()=== filteredYear;
        }
    )
    return(
        <Card className="expenses">
            <ExpensesChart filteredExpenseByYear={filteredExpenses}/>

            <ExpensesFilter selected={filteredYear} onSelectYear={selectYearHandler}/>

            {/* if no expenses in specific year, show <p> msg otherwise,  map expense obj to ExpenseItem component*/} 
            <ExpensesList items={filteredExpenses}/>
            
        </Card>
    )
}
export default Expenses;
















// import React, {useState} from 'react';

// import './Expenses.css'
// import Card from '../UI/Card'
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';

// function Expenses(props){
//     const [filteredYear, setFilteredYear]= useState('2020') //default year when u refresh the page

//     const filteredChangeHandler=(selectedYear)=>{
//         // console.log(`in Expenses, year=${selectedYear}`)
//         setFilteredYear(selectedYear)
//     }

//     const filteredExpenses= props.exp.filter(item=> {
//         return item.date.getFullYear().toString()===filteredYear
//     })   
//     console.log(filteredExpenses)
    
//     return (
//         <div>
//             <Card className="expenses">
//                 <ExpensesFilter 
//                     selected= {filteredYear} 
//                     onFilterChange= {filteredChangeHandler}
//                 />  
//                 {/*to enable 2way binding, selected prop is used to set the value of dropdown in child comp(ExpensesFilter) */}
//                 {/* {console.log(props.exp[2].date)} */}
//                 <ExpensesChart filteredExpenseByYear={filteredExpenses}/>
//                 <ExpensesList items={filteredExpenses}/>
//             </Card>
//         </div>
//     )
// }

// export default Expenses