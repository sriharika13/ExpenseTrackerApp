import ChartBar from './ChartBar'
import './Chart.css'

//we get props.datapoints array from Expenses.js where chart will appear, then each object will be transformed into ChartBar Component
//props.datapoints=[{value:270, label: "Jan"}, {}]
//maxValue is common for all ChartBars
//key must be added because all ChartBars are list items

const Chart= (props) =>{ //props is datapoints
    const dataPointValues= props.datapoints.map(datapoint=> +datapoint.value)  //+ to convert string to number. 
    const maximumByYear= Math.max(...dataPointValues) //dataPointValues is arr. Math.max wants individual numbers so spread the array

    return (
        <div className='chart'>
            {props.datapoints.map(datapoint=> 
                <ChartBar 
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxValue={maximumByYear}
                />
            )}
        </div>
    )
}
export default Chart














// import ChartBar from './ChartBar'
// import './Chart.css'

// const Chart= (props) =>{
//     const dataPointValues= props.datapoints.map((datapoint)=>+datapoint.value)  //numbers are stored in dataPointValues array
//     const totalMaximum= Math.max(...dataPointValues)  //Math.max wants list of elements and not array. We spread out array

//     return (
//         <div className='chart'>
//             {props.datapoints.map((datapoint)=>
//                 <ChartBar
//                     key= {datapoint.label}
//                     value={datapoint.value} 
//                     maxValue={totalMaximum}  //biggest value among all the months of a year
//                     label={datapoint.label}
//                 /> 
//             )}
//             {/* maxValue is same for all barCharts, datapoints will b coming from expenses list, 
//             datapoints will b a obj having key= value which is value we will fill on bar*/}
//         </div>
//     )
// }
// export default Chart