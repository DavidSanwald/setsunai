import {ADVANCE_TICK} from '../constants/ActionTypes'



const initialState= 0;

const tick = (state=initialState, action) => {
  switch (action.type) {
    case ADVANCE_TICK:
      return state+1
    default:
      return state
  }
}


export default tick
