import React from 'react'
import { ReactSVG } from 'react-svg'
import mapa from './Mapa_Regiones_de_Chile.svg'
import { useDispatch } from 'react-redux'
import './Mapa.css'
import { seleccionarRegion } from '../../redux/actions'

const obtenerNombreRegion = idPath => {
  switch (idPath.substring(0, idPath.indexOf('-'))) {
    case 'AricaParinacota':
      return 'Arica y Parinacota'
    case 'Tarapaca':
      return 'Tarapacá'
    case 'Antofagasta':
      return 'Antofagasta'
    case 'Atacama':
      return 'Atacama'
    case 'Coquimbo':
      return 'Coquimbo'
    case 'Valparaiso':
      return 'Valparaíso'
    case 'Metropolitana':
      return 'Metropolitana de Santiago'
    case 'OHiggins':
      return 'Libertador General Bernardo O’Higgins'
    case 'Maule':
      return 'Maule'
    case 'Nuble':
      return 'Ñuble'
    case 'Biobio':
      return 'Biobío'
    case 'Araucania':
      return 'La Araucanía'
    case 'Los_Rios':
      return 'Los Ríos'
    case 'Los_Lagos':
      return 'Los Lagos'
    case 'Aisen':
      return 'Aisén del G. Carlos Ibáñez del Campo'
    case 'Magallanes':
      return 'Magallanes y de la Antártica Chilena'
    default:
      return 'Chile'
  }
}

const Mapa = () => {

  const dispatch = useDispatch()

  const clickEnRegion = e => {
    const idPathRegion = e.target.id
    const regionPreviamenteSeleccionada = document.getElementsByClassName('region-mapa-seleccionada')[0]
    if (regionPreviamenteSeleccionada) {
      regionPreviamenteSeleccionada.classList.remove('region-mapa-seleccionada')
    }
    e.target.classList.add('region-mapa-seleccionada')
    let nombreRegion = obtenerNombreRegion(idPathRegion)
    dispatch(seleccionarRegion(nombreRegion))
  }

  return (
    <div className="contenedor-mapa">
      <ReactSVG
        src={mapa}
        onClick={clickEnRegion}
      />
    </div>
  )
}

export default Mapa
