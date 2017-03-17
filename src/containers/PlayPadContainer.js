// @flow
import React from "react";
import { connect } from "react-redux";
import PlayPad from "../components/PlayPad";
import { togglePad } from "../actions";
import { counts, pads, playingPads } from "../orm/selectors";

const mapStateToProps = (state, ownProps) => {
  const mono = pads(state).filter(pad => pad.id === ownProps.id)[0]["mono"]

  return {
  mono: pads(state).filter(pad => pad.id === ownProps.id)[0]["mono"],
  active: pads(state).filter(pad => pad.id === ownProps.id)[0]["active"],
  pitch: pads(state).filter(pad => pad.id === ownProps.id)[0]["pitch"],
  pulse: playingPads(state)
    .reduce((a, b) => a.concat(b))
    .filter(pad => pad.id === ownProps.id).length === 1,
  color: mono
    ? pads(state).filter(pad => pad.id === ownProps.id)[0]["pitch"]
    : state.kling,

}};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onPadClick: () => {
    dispatch(togglePad(ownProps.id));
  }
});
const PlayPadContainer = connect(mapStateToProps, mapDispatchToProps)(PlayPad);

export default PlayPadContainer;
