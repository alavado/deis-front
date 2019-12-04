import React from 'react'
import datos from '../../data/output.json'
import { Line } from 'react-chartjs-2'
import './GraficoPronostico.css'
import { ceros } from '../../helpers/general.js'

const obtenerSerieHistorica = servicios => {
  const años = [2017, 2018, 2019]
  const seriesAnuales = años.map(año => servicios.reduce((sumas, servicio) => {
    return sumas.map((v, i) => v + servicio.historico[año][i])
  }, ceros(servicios[0].historico[año].length)))
  return seriesAnuales.reduce((s, h) => [...s, ...h], [])
}

const obtenerSeriePronostico = servicios => {
  return servicios.reduce((sumas, servicio) => {
    return sumas.map((v, i) => v + servicio.pronostico[i])
  }, ceros(servicios[0].pronostico.length))
}

const GraficoPronostico = props => {

  const region = JSON.parse(props.region)
  const servicios = datos.filter(({servicio}) => region.servicios.includes(servicio))
  const serieHistorica = obtenerSerieHistorica(servicios)
  const pronostico = obtenerSeriePronostico(servicios)

  const data = {
    labels: Array.from(Array(serieHistorica.length + pronostico.length).keys()),
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
        data: serieHistorica
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
        data: [...serieHistorica.map(v => null), ...pronostico]
      }
    ]
  }

  const options = {
    scales: {
      xAxes: [{
        gridLines: {
        },
        scaleLabel: {
          display: true,
          labelString: 'Semana'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'N° de atenciones'
        }
      }],
    },
  }

  return (
    <div className="contenedor-grafico">
      <h1>Pronóstico para {region.nombre}</h1>
      <Line data={data} options={options} />
    </div>
  )
}

export default GraficoPronostico
