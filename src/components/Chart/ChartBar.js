import './ChartBar.css'

const ChartBar =(props) =>{
    let barFillHeight='0%';

    if(props.maxValue>0){
        barFillHeight= Math.round((props.value/props.maxValue)*100) + '%'
        //for 2019- makeup=1500 and book=900 so barFillHeight for month of book= (900/1500)*100 % = 60%
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar














// import React from "react"

// import './ChartBar.css'

// const ChartBar =(props) =>{
//     let barFillHeight= '0%'

//     if (props.maxValue>0){
//         barFillHeight= Math.round((props.value/props.maxValue)*100) + '%'
//     }
//     return (
//         <div className="chart-bar">
//             <div className="chart-bar__inner">
//                 <div className="chart-bar__fill" style={{height: barFillHeight}}></div>  
//                 {/*'background-color' can be written as backroundColor , inner {} for writting javascript*/}
//                 </div>
//             <div className="chart-bar__label">{props.label}</div>
            
//         </div>
//     )
// }
// export default ChartBar