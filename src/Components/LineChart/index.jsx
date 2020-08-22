import React from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment'

function LineChart(props){
    console.log(props.countryData)
    
    /*Array de casos recuperados*/
    const recovered = props.countryData.reduce( ( accum, current) => {
        return [...accum, current.Recovered]
    }, [] )

    /*Array de casos confirmados*/
    const confirmed = props.countryData.reduce( ( accum, current) => {
        return [...accum, current.Confirmed]
    }, [] )

    console.log(recovered)

    /*Array de fechas*/

    const dateArray = props.countryData.reduce( ( accum, current) => {
        return [...accum, moment(current.Date).format("DD/MM/YYYY")]
    }, [] )



    const data = {
        labels: dateArray,
        datasets: [
          {
            label: 'Recuperados',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: recovered
          },{
            label: 'Confirmados',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(205,133,63,0.4)',
            borderColor: '#CD853F',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#CD853F',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#CD853F',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: confirmed
          }
        ]
    };
    return(
        <div>
            <h2>Line Example</h2>
            <Line data={data} />
        </div>
    )
}

export default LineChart