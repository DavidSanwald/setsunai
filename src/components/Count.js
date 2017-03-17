/* @flow */
import React from "react";
import PlayPadContainer from "../containers/PlayPadContainer";
import styled from "styled-components";

const StyledCount = styled.div`
display: flex;
flex-direction: column;
max-width: 12.5%
  `;

class Count extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <StyledCount>
        {this.props.children.map((child, index) => (
          <PlayPadContainer key={child.id} id={child.id} />
        ))}
      </StyledCount>
    );
  }
}

export default Count;
