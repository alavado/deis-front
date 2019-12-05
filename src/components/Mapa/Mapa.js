import React from 'react'
import mapa from './Mapa_Regiones_de_Chile.svg'
import './Mapa.css'

const Mapa = () => {
  return (
    <div className="contenedor-mapa">
      <svg src={mapa} />
    </div>
  )
}

export default Mapa
