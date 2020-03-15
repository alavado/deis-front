import React from 'react'
import './App.css'
import GraficoPronostico from '../GraficoPronostico'
import Mapa from '../Mapa'

const App = () => {

  return (
    <div className="App">
      {/* <label htmlFor="selector-region">Región</label>
      <select id="selector-region" onChange={e => setRegion(e.target.value)}>
        {regiones.map(region => <option value={JSON.stringify(region)}>{region.nombre}</option>)}
      </select> */}
      {/* <h1>Monitoreo y predicción de enfermedades respiratorias</h1> */}
      <div className="contenedor">
        <Mapa />
        <GraficoPronostico />
      </div>
    </div>
  )
}

export default App
