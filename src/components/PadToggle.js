// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components';
import StyledPad from '../sharedcomponents/StyledPad'

function animation(props) {
    return keyframes `

    to {
      opacity: 0.925;
    }
  `;
}

const StyledPadToggle = styled(StyledPad) `
background-color: ${props => props.theme[props.kling]};
width: 100%;

&:hover {
  animation: ${animation} 0.5s infinite alternate;
  }
`;

const PadToggle = ({
    kling,
    onPadClick,
    active,
    klang,
    colours,
    pitch,
    ...props
}) => (
    <StyledPadToggle onClick={onPadClick}  colours={colours} kling={kling}  >
        &nbsp;
    </StyledPadToggle>
)

export default PadToggle;
