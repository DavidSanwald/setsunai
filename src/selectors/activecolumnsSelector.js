import {instruments, song} from '../parameters/audioparams'

export const getActiveColumns = (tick) => {
    const instrumentDurations = instruments.map(instrument => instrument.duration)
    const activeColumnNumbers = instrumentDurations.map((duration, index)=> ((tick / duration) % song.barLength[index]))
    const activeColumns = activeColumnNumbers.filter(x=>Number.isInteger(x))


    return activeColumns
}
