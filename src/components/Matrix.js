import React from "react";
import Count from "./Count";
import styled from "styled-components";

const StyledMatrix = styled.div`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
  `;

class Matrix extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <StyledMatrix instrument={this.props.instrument}>
        {this.props.children}
      </StyledMatrix>
    );
  }
}

export default Matrix;
