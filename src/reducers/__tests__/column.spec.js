import column from '../column';
const state_1 = 0
const state_2 = 15
const action_TOGGLE_TICK = {
    type: 'TOGGLE_TICK'
}


describe('reducer', () => {
    it('should jump to the next tick', () => {
        expect(column(state_1, action_TOGGLE_TICK)).toEqual(1)
    })})

    it('should handle the initial state', ()=>{
      expect(column(state_2, action_TOGGLE_TICK)).toEqual(0)})
