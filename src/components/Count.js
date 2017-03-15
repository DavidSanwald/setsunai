/* @flow */
import React from 'react'
import PlayPadContainer from '../containers/PlayPadContainer'

import styled from "styled-components"

const StyledCount = styled.div`
display: flex;
flex-direction: column;
  `;



const Count = ({children, ...props}) => (
   <StyledCount>
     {children.map((child, index)=>(<PlayPadContainer key={child.id} id={child.id} ></PlayPadContainer>))}
  </StyledCount>

);

export default Count;
