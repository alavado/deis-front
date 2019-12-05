import React from 'react'
import datos from '../../data/output.json'
import { Line } from 'react-chartjs-2'
import './GraficoPronostico.css'
import { ceros } from '../../helpers/general.js'
import { useSelector } from 'react-redux'
import 'chartjs-plugin-annotation'

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

const obtenerTitulo = nombreRegion => {
  if (nombreRegion === 'Chile') {
    return `Pronóstico para ${nombreRegion}`
  }
  else if (nombreRegion === 'Metropolitana de Santiago') {
    return `Pronóstico para la Región ${nombreRegion}`
  }
  else if (['Libertador General Bernardo O’Higgins', 'Maule', 'Biobío'].includes(nombreRegion)) {
    return `Pronóstico para la Región del ${nombreRegion}`
  }
  return `Pronóstico para la Región de ${nombreRegion}`
}

const GraficoPronostico = () => {

  const region = useSelector(state => state.region.region)
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
        pointBorderColor: 'grey',
        pointBackgroundColor: '#C04BC0',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#C04BC0',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
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
    annotation: {
      drawTime: 'afterDatasetsDraw',
      events: ['click'],
      dblClickSpeed: 350,
      annotations: [{
        id: 'vline',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: 52,
        borderColor: 'grey',
        borderWidth: 2,
        label: {
          backgroundColor: 'grey',
          content: '2018',
          enabled: true
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }
      },{
        id: 'vline2',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: 104,
        borderColor: 'grey',
        borderWidth: 2,
        label: {
          backgroundColor: 'grey',
          content: '2019',
          enabled: true
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }
      },{
        id: 'vline3',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: serieHistorica.length - 1,
        borderColor: 'grey',
        borderWidth: 2,
        label: {
          backgroundColor: 'grey',
          content: 'Semana actual',
          enabled: true
        },
        onClick: function(e) {
          // The annotation is is bound to the `this` variable
          console.log('Annotation', e.type, this);
        }
      }]
    }
  }

  return (
    <div className="contenedor-grafico">
      <h1>{obtenerTitulo(region.nombre)}</h1>
      <Line data={data} options={options} />
    </div>
  )
}

export default GraficoPronostico
