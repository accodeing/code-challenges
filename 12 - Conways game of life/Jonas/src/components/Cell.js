import React from 'react';
import styled from 'styled-components'

const Cell = styled.div`
  background-color: ${ props => props.alive ? 'black' : 'white' };
`;

export default Cell;
