import {TOGGLE_KLING} from '../constants/ActionTypes'




const initialState= 1

const kling = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_KLING:
        return (state+1)%5
    default:
      return state
  }
}


export default kling
