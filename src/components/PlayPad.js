// @flow
import React from 'react';
import styled, {keyframes} from 'styled-components';
import StyledPad from '../sharedcomponents/StyledPad';

function animationBG(props) {
    return keyframes `
    from {
      background-color: ${props.theme[props.kling]};
    }
  `;
}

function animation(props) {
    return keyframes `
    from {
      background-color: ${props.theme['base']};
    }
    to {
      background-color: ${props.theme[props.kling]};
    }
  `;
}
function animationGRAD(props) {
    return keyframes `
    from {
      background-position:50% 0%;
    }
  `;
}


const StyledPlayPad = styled(StyledPad)`
background-color: ${props => props.pulse
    ? props.theme[props.color]
    : props.theme['base']};
        opacity: ${props => props.active
        ? 0.9
        : 1};
transition: background-color 5s cubic-bezier(.17,.67,.83,.67)  ;
transition: opacity 500ms cubic-bezier(0,1,1,0)  ;

&:hover {
    opacity: 0.7;
  }
`;

class PlayPad extends React.PureComponent{
  componentDidUpdate(prevProps) {
  Object.keys(this.props).forEach(key => {
    if (this.props[key] !== prevProps[key]) {
      console.log(key, "changed from", prevProps[key], "to", this.props[key]);
    }
  });
}
  shouldComponentUpdate (nextProps) {
    // have any of the items changed?
    if(this.props.pulse=== nextProps.pulse){
        return true;
    }
    // everything from here is horrible.

    // if interaction has not changed at all then when can return false (yay!)
    if(this.props.active){
        return true;
    }
    return false
  }

  render() {
    return (
    <StyledPlayPad key={this.props.id} id={this.props.id} onClick={this.props.onPadClick} kling={this.props.kling} active={this.props.active} color={this.props.color} pulse={this.props.pulse}>
        &nbsp;
    </StyledPlayPad>
)}}

export default PlayPad;
