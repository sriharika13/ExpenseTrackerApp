import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart =(props) =>{  //props is filteredExpenseByYear
    const chartDatapoints =[
    //value is changed dynamically- go through all the filtered expenses of a year, sum up expenses of different months on value key
        // for this, i want filteredExpenseByYear as prop here
        {label: 'Jan', value:0},  
        {label: 'Feb', value:0},
        {label: 'Mar', value:0},
        {label: 'Apr', value:0},
        {label: 'May', value:0},
        {label: 'Jun', value:0},
        {label: 'Jul', value:0},
        {label: 'Aug', value:0},
        {label: 'Sep', value:0},
        {label: 'Oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0}
    ]

    for (const expense of props.filteredExpenseByYear){
        const expenseMonth= expense.date.getMonth()  //starting with 0 =>january for 0. So can use this as index in our array
        chartDatapoints[expenseMonth].value += expense.amount
    }

    return (
        <Chart datapoints= {chartDatapoints}/>  
    )
}
export default ExpensesChart