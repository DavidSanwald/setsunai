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
  background-color: ${(props) =>props.theme[props.color]};
  }
`;

class PlayPad extends React.PureComponent{
  render() {
    return (
    <StyledPlayPad key={this.props.id} id={this.props.id} onClick={this.props.onPadClick} kling={this.props.kling} active={this.props.active} color={this.props.color} pulse={this.props.pulse}>
        &nbsp;
    </StyledPlayPad>
)}}

export default PlayPad;
