import React from 'react'
import datos from '../../data/output.json'
import { Line } from 'react-chartjs-2'
import './GraficoPronostico.css'

const GraficoPronostico = props => {

  const datosServicio = datos.find(d => d.servicio === props.servicio)
  const { historico, pronostico } = datosServicio
  const datosHistoricos = [...historico["2017"], ...historico["2018"], ...historico["2019"]]

  const data = {
    labels: Array.from(Array(datosHistoricos.length + pronostico.length).keys()),
    datasets: [
      {
        label: 'Histórico',
        fill: false,
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
        data: [...historico["2017"], ...historico["2018"], ...historico["2019"]]
      },
      {
        label: 'Pronóstico',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(192,75,192,0.4)',
        borderColor: 'rgba(192,75,192,1)',
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
        data: [...Array.from(Array(datosHistoricos.length).keys()).map(v => null), ...pronostico]
      }
    ]
  };
  return (
    <div className="contenedor-grafico">
      <Line data={data} />
    </div>
  )
}

export default GraficoPronostico
