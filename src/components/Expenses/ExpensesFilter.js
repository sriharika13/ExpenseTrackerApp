import './ExpensesFilter.css';

const ExpensesFilter = (props) => { //props is onSelectYear

  function selectYearHandler(event){
    props.onSelectYear(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
















// import React from 'react';

// import './ExpensesFilter.css';

// const ExpensesFilter = (props) => {
//   const dropdownChangeHandler=(event)=>{
//     const year= event.target.value
//     props.onFilterChange(year)
//   }

//   return (
//     <div className='expenses-filter'>
//       <div className='expenses-filter__control'>
//         <label>Filter by year</label>
//         <select value= {props.selected} onChange={dropdownChangeHandler}>
//           <option value='2022'>2022</option>
//           <option value='2021'>2021</option>
//           <option value='2020'>2020</option>
//           <option value='2019'>2019</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ExpensesFilter;