import * as actions from '../index'

describe('actions', () => {
  it('should create an action to toggle one pad at the time', () => {
    const position = 3
    const expectedAction = {
      type: 'TOGGLE_PAD',
      position
    }
    expect(actions.togglePad(position)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to toggle the count to the next beat', () => {
    const expectedAction = {
      type: 'TOGGLE_TICK'
    }
    expect(actions.toggleTick()).toEqual(expectedAction)
  })
})


var compressor = Howler.Howler.ctx.createDynamicsCompressor();
compressor.threshold.value = -100;
compressor.knee.value = 1;
compressor.ratio.value = 20;
compressor.attack.value = 0.01;
compressor.release.value = 0.25;
compressor.connect(Howler.Howler.ctx.destination)
Howler.Howler.masterGain.connect(compressor);
