import Howler from 'howler'
import {playingPads} from '../orm/selectors'
import {ADVANCE_TICK} from '../constants/ActionTypes'
import klangs from './tones'
import ticker from './ticker'



const preloader = function player(klangs) {
const preloaded = klangs



return store => next => action => {
    if (action.type === ADVANCE_TICK) {
      const state = store.getState()
      const emotion = preloaded[state.kling]
        const pads = playingPads(state)
        const toene = pads.map((instrument, index)=>instrument.map(pad => emotion[index].play([pad.pitch])))

    }
    let result = next(action);
    return result
}};

const player = preloader(klangs)

export default player;
