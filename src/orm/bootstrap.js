export default function bootstrap(orm) {
    // Get the empty state according to our schema.
    const state = orm.getEmptyState();

    // Begin a mutating session with that state.
    // `state` will be mutated.
    const session = orm.mutableSession(state);

    // Model classes are available as properties of the
    // Session instance.
    const {Pad, Count, Instrument} = session;
    //  const instrument = Instrument.create();

    const melody = Instrument.create({
        name: 'Melody',
        duration: 1,
        barLength: 8,
        // optional. If omitted, Redux-ORM uses a number sequence starting from 0.

    });
    const harmony = Instrument.create({
        name: 'Harmony', // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
        duration: 16,
        barLength: 8,
    });
    const tmp = [0, 1, 2, 3, 4, 5, 6, 7]
    const tmp2 = [0, 1, 2, 3, 4, 5, 6, 7,8]

    const melodyCounts = tmp.map(x=>(Count.create({
      instrument: 'Melody',
      position: x,
    })))

    const harmonyCounts = tmp.map(x=>(Count.create({
      instrument: 'Harmony',
      position: x,
    })))

    const melodyPads = tmp.map(x=>(tmp2.map(x2=>(Pad.create({
      count: x,
      pitch: x2,
      active: false,
      mono: false
    })))))
    //console.log('MelodyPads', melodyPads)

    const harmonyPads =
    tmp.map(x=>([Pad.create({
      count: x+8,
      pitch: 8,
      active: false,
      mono: true
    })]))
    //console.log('Harmony Pads', harmonyPads)
    return {orm: state};
}
