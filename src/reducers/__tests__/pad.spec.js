// @flow
import pad from '../pad';

const action_TOGGLE_PAD = {
    type: 'TOGGLE_PAD',
    row: 5,
    column: 5
}



describe('reducer', () => {
    it('should toggle the middle pad to false', () => {
        expect(pad(undefined,action_TOGGLE_PAD).getIn([5,5])).toEqual(true)
    })})
