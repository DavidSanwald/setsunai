import React from 'react'
import Count from './Count'
import styled from "styled-components"




const StyledMatrix = styled.div`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
  `;


const Matrix = ({
  instrument,
    counts,
    pads,
    children,
    ...props
}) => (
<StyledMatrix instrument={instrument}>
      {children}
    </StyledMatrix>
    )


export default Matrix
