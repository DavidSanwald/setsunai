// @flow
import * as types from '../constants/ActionTypes'


export const togglePad = id => ({type: types.TOGGLE_PAD, payload: id})

export const advanceTick = () => ({type: types.ADVANCE_TICK})

export const noteLoaded = () => ({type: types.NOTE_LOADED})

export const toggleKling = () => ({type: types.TOGGLE_KLING})

export const createInstrument = () => ({type: types.CREATE_INSTRUMENT})
