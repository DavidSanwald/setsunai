// @flow
import React from "react";
import MatrixContainer from "../containers/MatrixContainer";
import { connect } from "react-redux";
import { togglePad, advanceTick, toggleKling } from "../actions";
import { instruments, song } from "../parameters/audioparams";
import StyledPad from "../sharedcomponents/StyledPad";
import PadToggle from "./PadToggle";
import MainWrapper from "../layout/MainWrapper";
import Perf from "react-addons-perf";

window.Perf = Perf;

class App extends React.Component {
  render() {
    return (
      <div>
        <MatrixContainer key={0} instrument={"Melody"} />
        <MatrixContainer key={1} instrument={"Harmony"} />

        <PadToggle
          kling={this.props.kling}
          onPadClick={this.props.onPadClick}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({ kling: state.kling });
const mapDispatchToProps = (dispatch, ownProps) => ({
  onPadClick: () => {
    dispatch(toggleKling());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
//  <MatrixContainer {...this.props} key={1} klang={1} instrument={'Harmony'}/>
