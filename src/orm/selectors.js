import { orm } from "./models";
import { createSelector } from "reselect";
import { createSelector as ormCreateSelector } from "redux-orm";

export const ormSelector = state => state.orm;

export const counts = createSelector(
  ormSelector,
  ormCreateSelector(orm, session => {
    return session.Count.all().toModelArray();
  })
);

export const countIds = createSelector(
  ormSelector,
  ormCreateSelector(orm, session => {
    return session.Count.all().toRefArray();
  })
);

export const activeCounts = createSelector(
  ormSelector,
  state => state.tick,
  ormCreateSelector(orm, (session, tick) => {
    return session.Count
      .all()
      .toModelArray()
      .map(count => {
        const activePads = count.pads.filter({ active: true }).toRefArray();
        const obj = Object.assign({}, count.ref);
        obj.duration = count.instrument.duration;
        obj.barLength = count.instrument.barLength;
        obj.pads = activePads;

        return obj;
      })
      .filter(
        count =>
          tick / count.duration % count.barLength === count.position
      );
  })
);

export const activeCountsPulse = createSelector(
  ormSelector,
  state => state.tick,
  ormCreateSelector(orm, (session, tick) => {
    return session.Count
      .all()
      .toModelArray()
      .map(count => {
        const activePads = count.pads.filter({ active: true }).toRefArray();
        const obj = Object.assign({}, count.ref);
        obj.duration = count.instrument.duration;
        obj.barLength = count.instrument.barLength;
        obj.pads = activePads;

        return obj;
      })
      .filter(
        count =>
          Math.floor(tick / count.duration % count.barLength) === count.position
      );
  })
);

export const pads = createSelector(
  ormSelector,
  ormCreateSelector(orm, session => {
    const pads = session.Pad.all().toRefArray();
    return pads;
  })
);

export const activePads = createSelector(
  ormSelector,
  pads,
  ormCreateSelector(orm, (session, allpads) => {
    return allpads.filter(pad => pad.active === true);
  })
);

export const playingPads = createSelector(
  ormSelector,
  activeCounts,
  ormCreateSelector(orm, (session, importantCounts) => {
    const trick = importantCounts.map(count => count.pads);

    return trick;
  })
);

export const pulsingPads = createSelector(
  ormSelector,
  activeCountsPulse,
  ormCreateSelector(orm, (session, importantCounts) => {
    const trick = importantCounts.map(count => count.pads);

    return trick;
  })
);
