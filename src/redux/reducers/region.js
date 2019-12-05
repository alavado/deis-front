import { SELECCIONAR_REGION } from "../actionTypes";
import regionesJSON from '../../data/servicios-regiones.json'

const regiones = regionesJSON.regiones

const initialState = {
  region: regiones[0]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECCIONAR_REGION: {
      const { nombreRegion } = action.payload
      console.log(regiones)
      return {
        ...state,
        region: regiones.find(({nombre}) => nombre === nombreRegion)
      }
    }
    default:
      return state;
  }
}
