import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  background-color: ${props => (props.alive ? "black" : "white")};
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export default Cell;
