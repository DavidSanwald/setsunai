// @flow
import React from "react";
import styled, { keyframes, css } from "styled-components";
import StyledPad from "../sharedcomponents/StyledPad";

function animationBG(props) {
  return keyframes`
    from {
      background-color: ${props.theme[props.color]};
    }
  `;
}

function animationColor(props) {
  return keyframes`
    from {
      background-color: ${props.theme["base"]};
    }
    to {
      background-color: ${props.theme[props.color]};
    }
  `;
}
function testanimation(props) {
  return keyframes`

    to {
      opacity: 0.8;
    }
  `;
}

const StyledPlayPad = styled(StyledPad)`
background-color: ${props => props.pulse ? props.theme[props.color] : props.theme["base"]};
        opacity: ${props => props.active ? 0.9 : 1};
transition: background-color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)  ;
transition: opacity 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)  ;
${props => {
  if (props.mono && props.pulse) {
    // Returning a template literal with interpolations? You need to use `css`
    return css`
            animation:  ${testanimation(props)} 0.5s 0.3s infinite alternate;
        `;
  } else if (props.mono === true) {
    console.log("YO");
    return css`
            background-color: ${props => props.theme[props.color]};
        `;
  } else {
    // Returning a standard string? No need to use `css`
    return null;
  }
}}


&:hover {
    opacity: 0.7;
  }
`;

class PlayPad extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.pulse !== nextProps.pulse ||
      this.props.active !== nextProps.active ||
      this.props.color !== nextProps.color
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <StyledPlayPad
        mono={this.props.mono}
        key={this.props.id}
        id={this.props.id}
        onClick={this.props.onPadClick}
        kling={this.props.kling}
        active={this.props.active}
        color={this.props.color}
        pulse={this.props.pulse}
      />
    );
  }
}

export default PlayPad;
