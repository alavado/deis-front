import { SELECCIONAR_REGION } from "./actionTypes";

export const seleccionarRegion = nombreRegion => ({
  type: SELECCIONAR_REGION,
  payload: { nombreRegion }
})
