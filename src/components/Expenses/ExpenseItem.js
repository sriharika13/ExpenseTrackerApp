import './ExpenseItem.css'
import ExpenseDate from  './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props){

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>          
            </Card>
        </li>
    )
}

export default ExpenseItem;


















// import React from 'react'  

// import './ExpenseItem.css'
// import ExpenseDate from './ExpenseDate'
// import Card from '../UI/Card'

// function ExpenseItem(props){
//     // const [title, setState]= useState(props.title)  
//     //i can use const for title bcoz when calling setState-it doesn't assign new value to title by = sign,
//     // instead setState runs this component again and this time, useState returns updated state value in title (line 8)

//     return (
//         <Card className='expense-item'>
//             <ExpenseDate date={props.date}/>   
//             {/* date of props.date came from ExpenseItem Comp. and i forwarded tht date as date to ExpenseDate comp. */}
//             <div className='expense-item__description'>
//                 <h2>{props.title}</h2>  
//                 <div className='expense-item__price'>Rs. {props.amount}</div>
//             </div>
//         </Card>
//     )
// }
// export default ExpenseItem