import React from 'react'
import { ReactSVG } from 'react-svg'
import mapa from './Mapa_Regiones_de_Chile.svg'
import { useDispatch } from 'react-redux'
import './Mapa.css'
import { seleccionarRegion } from '../../redux/actions'

const Mapa = () => {

  const dispatch = useDispatch()

  const test = e => {
    const idPath = e.target.id
    console.log(idPath.substring(0, idPath.indexOf('-')))
    let nombreRegion
    switch (idPath.substring(0, idPath.indexOf('-'))) {
      case 'AricaParinacota':
        nombreRegion = 'Arica y Parinacota'
        break
      case 'Tarapaca':
        nombreRegion = 'Tarapacá'
        break
      case 'Antofagasta':
        nombreRegion = 'Antofagasta'
        break
      case 'Atacama':
        nombreRegion = 'Atacama'
        break
      case 'Coquimbo':
        nombreRegion = 'Coquimbo'
        break
      case 'Valparaiso':
        nombreRegion = 'Valparaíso'
        break
      case 'Metropolitana':
        nombreRegion = 'Metropolitana de Santiago'
        break
      case 'OHiggins':
        nombreRegion = 'Libertador General Bernardo O’Higgins'
        break
      case 'Maule':
        nombreRegion = 'Maule'
        break
      case 'Nuble':
        nombreRegion = 'Ñuble'
        break
      case 'Biobio':
        nombreRegion = 'Biobío'
        break
      case 'Araucania':
        nombreRegion = 'La Araucanía'
        break
      case 'Los_Rios':
        nombreRegion = 'Los Ríos'
        break
      case 'Los_Lagos':
        nombreRegion = 'Los Lagos'
        break
      case 'Aisen':
        nombreRegion = 'Aisén del G. Carlos Ibáñez del Campo'
        break
      case 'Magallanes':
        nombreRegion = 'Magallanes y de la Antártica Chilena'
        break
      default:
        nombreRegion = 'Chile'
    }
    dispatch(seleccionarRegion(nombreRegion))
  }

  return (
    <div className="contenedor-mapa">
      <ReactSVG src={mapa} onClick={test}/>
    </div>
  )
}

export default Mapa
