import { SELECCIONAR_REGION } from "../actionTypes";

const initialState = {
  region: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECCIONAR_REGION: {
      const { region } = action.payload;
      return {
        ...state,
        region
      }
    }
    default:
      return state;
  }
}
