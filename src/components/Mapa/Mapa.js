import React from 'react'
import { ReactSVG } from 'react-svg'
import mapa from './Mapa_Regiones_de_Chile.svg'
import './Mapa.css'

const Mapa = () => {
  return (
    <div className="contenedor-mapa">
      <ReactSVG src={mapa} onClick={e => alert(e.target.id)} />
    </div>
  )
}

export default Mapa
