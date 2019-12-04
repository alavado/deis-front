import React, { useState } from 'react'
import './App.css'
import GraficoPronostico from '../GraficoPronostico'
import serviciosJSON from '../../data/servicios.json'

const App = () => {

  const servicios = serviciosJSON.servicios
  const [servicio, setServicio] = useState(servicios[0])

  return (
    <div className="App">
      <label htmlFor="selector-servicio">Servicio</label>
      <select id="selector-servicio" onChange={e => setServicio(e.target.value)}>
        {servicios.map(servicio => <option value={servicio}>{servicio}</option>)}
      </select>
      <GraficoPronostico
        servicio={servicio}
      />
    </div>
  )
}

export default App
