import {ORM, Model, fk, attr} from 'redux-orm';
import {CREATE_INSTRUMENT, ADD_COUNT, ADD_PAD, TOGGLE_PAD} from '../constants/ActionTypes'

export class Instrument extends Model {
    static get fields() {
        return {
            name: attr(), duration: attr(), barLength: attr(),
            // Define a many-sided relation - one Post can have many Comments,
            // at a field named "comments"
        };
    }

    static reducer(action, Instrument, session) {
        switch (action.type) {
            case CREATE_INSTRUMENT:
                {
                    Instrument.create(action.payload);
                    break;
                }
            case ADD_COUNT:
                {
                    const {payload} = action;
                    const {instrumentId, countId} = payload;
                    // Queue up the addition of a relation between this Comment ID
                    // and this Post instance
                    Instrument.withId(instrumentId).counts.add(countId);
                    break;
                }
        }

        // Redux-ORM will automatically apply queued updates after this returns
    }
}
Instrument.options = {
    idAttribute: 'name'
};

Instrument.modelName = "Instrument";

export class Count extends Model {
    static get fields() {
        return {
            // Define a many-sided relation - one Post can have many Comments,
            // at a field named "comments"
            //beat: oneToOne('Beat','counts'),
            instrument: fk('Instrument', 'counts'),
            position: attr()
        };
    }

    static reducer(action, Count, session) {
        switch (action.type) {
            case ADD_COUNT:
                {
                    // Queue up the creation of a Post instance
                    Count.create(action.payload);
                    break;
                }
            case ADD_PAD:
                {
                    const {payload} = action;
                    const {countId, padId} = payload;
                    // Queue up the addition of a relation between this Comment ID
                    // and this Post instance
                    Count.withId(countId).counts.add(padId);
                    break;
                }
        }

        // Redux-ORM will automatically apply queued updates after this returns
    }
}
Count.modelName = "Count";

export class Pad extends Model {
    static get fields() {
        return {
            count: fk('Count', 'pads'),
            pitch: attr(),
            active: attr(),
            mono: attr()
        };
    }

    static reducer(action, Pad, session) {
        switch (action.type) {
            case ADD_PAD:
                {
                    const {payload} = action;
                    const {padId, padPitch} = payload;

                    // Queue up the creation of a Comment instance
                    Pad.create({id: padId, pitch: padPitch});
                    break;
                }
            case TOGGLE_PAD:
                {
                    const {payload} = action;
                    // Queue up the addition of a relation between this Comment ID
                    const {active, mono, pitch} = Pad.withId(payload)
                    if (mono) {
                        (!active&&pitch!==8)
                            ? Pad.withId(payload).set('active', true):
                             pitch === 8 ? (Pad.withId(payload).set('pitch', 0),Pad.withId(payload).set('active', true)):pitch === 7?
                             (Pad.withId(payload).set('active', false), Pad.withId(payload).set('pitch', pitch + 1)):
                             (Pad.withId(payload).set('pitch', pitch + 1),Pad.withId(payload).set('active', true))

                    }
                    else {
                    Pad.withId(payload).set('active', !active)};
                    break;
                }
        }

        // Redux-ORM will automatically apply queued updates after this returns
    }
}
Pad.modelName = "Pad";

export const orm = new ORM();
orm.register(Pad, Count, Instrument);

export default orm;
