// @flow
import React from 'react'
import {connect} from 'react-redux'
import Count from '../components/Count'
import {togglePad} from '../actions'

const CountContainer = ({children, colnumber, klang, activeColumn, ...props}) => (
   <StyledCount className={props.className}>
     {children.map((child, index)=>(<PadContainer key={child.id} id={child.id}></PadContainer>))}
  </StyledCount>

);

const mapStateToProps = (state) => ({active: state.active})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onPadClick: () => {
        dispatch(togglePad(ownProps.id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
