// @flow
import Rx from 'rxjs/Rx';
import {advanceTick} from '../actions'
import {song} from '../parameters/audioparams'

export default function ticker(actualStore) {
    this.audioContext = new AudioContext();
    this.futureTickTime = this.audioContext.currentTime
    this.counter = 1
    this.tempo = song.bpm
    this.secondsPerBeat = (60 / this.tempo)
    this.counterTimeValue = this.secondsPerBeat / 2

    this.playTick = () => {
        actualStore.dispatch(advanceTick())
        this.counter += 1;
        this.futureTickTime += this.counterTimeValue
        const bar = Math.floor(this.counter / 16) + 1
        const beat = Math.floor(this.counter % 16 / 4) + 1
        const s = this.counter % 4 + 1
        console.log('Bar: ' + bar + '\nBeat: ' + beat + '\nStep: '+ s)
    }

    this.scheduler = () => {
        if (this.futureTickTime < this.audioContext.currentTime + 0.0001) {
            this.playTick(actualStore);
        }
        window.setTimeout(this.scheduler, 0);
    }
}
