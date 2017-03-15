import {instruments, song} from '../parameters/audioparams'

export const getPlayingPads = (activeColumn, activePads) => {
    const instrumentDurations = instruments.map(instrument => instrument.duration)
    const activeColumnNumbers = instrumentDurations.map(duration => ((tick / duration) % song.barLength))
    const activeColumns = activeColumnNumbers.map(column=> Math.floor(column))
    return activeColumns
}
