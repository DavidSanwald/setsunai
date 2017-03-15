import {connect} from 'react-redux'
import React from 'react'
import Matrix from '../components/Matrix'
import {togglePad, advanceTick} from '../actions'
import Count from '../components/Count'
import {instruments, song} from '../parameters/audioparams'
import {getActiveColumns} from '../selectors/activecolumnsSelector'
import {counts, pads, countIds} from '../orm/selectors';


const MatrixContainer = ({
    counts,
    pads
}) => (
      <Matrix>
      {counts.map((count, index) => (
          <Count key={count.id}>{pads.filter(pad=>(pad.count===count.id))}</Count>
      ))}
    </Matrix>
    )



const mapStateToProps = (state, ownProps) => ({
    counts: countIds(state).filter(count=>(count.instrument.name=== ownProps.instrument)),
    pads: pads(state).map(padObj=> {
      const obj = {
        id: padObj.id,
        count: padObj.count
      };
      return obj})})


export default connect(mapStateToProps)(MatrixContainer)
