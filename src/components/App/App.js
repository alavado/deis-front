import React, { useState } from 'react'
import './App.css'
import GraficoPronostico from '../GraficoPronostico'
import regionesJSON from '../../data/servicios-regiones.json'
import Mapa from '../Mapa'

const App = () => {

  const regiones = regionesJSON.regiones
  const [region, setRegion] = useState(JSON.stringify(regiones[12]))

  return (
    <div className="App">
      <label htmlFor="selector-region">Región</label>
      <select id="selector-region" onChange={e => setRegion(e.target.value)}>
        {regiones.map(region => <option value={JSON.stringify(region)}>{region.nombre}</option>)}
      </select>
      {/* <Mapa /> */}
      <GraficoPronostico
        region={region}
      />
    </div>
  )
}

export default App
