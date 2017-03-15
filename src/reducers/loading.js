// @flow
import {NOTE_LOADED} from '../constants/ActionTypes'

const initialState= 4

const loadingFiles = (state=initialState, action) => {
  switch (action.type) {
    case NOTE_LOADED:
        return state-1
    default:
      return state
  }
}


export default loadingFiles
