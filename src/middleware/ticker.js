// @flow
import {advanceTick} from '../actions'
import {song} from '../parameters/audioparams'

export default function ticker(store) {
    this.audioContext = new AudioContext();
    this.futureTickTime = this.audioContext.currentTime
    this.counter = 1
    this.tempo = song.bpm
    this.secondsPerBeat = (60 / this.tempo)
    this.counterTimeValue = this.secondsPerBeat / 2

    this.playTick = (store) => {
        store.dispatch(advanceTick())
        this.counter += 1;
        this.futureTickTime += this.counterTimeValue
    }

    this.scheduler = () => {
        if (this.futureTickTime < this.audioContext.currentTime + 0.0001) {
            this.playTick(store);
        }
        window.setTimeout(this.scheduler, 0);
    }
}
