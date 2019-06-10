import React from 'react';
import styled from 'styled-components'

import Cell from './Cell'

const Container = styled.main`
  height: 100%;
  width: 100%;
  display:grid;
  grid-template-columns: repeat(${ props => props.width }, 1fr);
  grid-template-rows: repeat(${ props => props.height }, 1fr);
`;

const get_bit = ( state, x ,y ) => {
  const base_mask = '00000000';
  const view = new Uint8Array( state.buffers[ state.front_buffer ]);
  const byte_offset = Math.floor(((state.width * y) + x) / 8);
  const bit_offset = ((state.width * y) + x) % 8;
  const byte = view[ byte_offset ];
  const mask = base_mask.slice(0, 7-bit_offset) + '1' + base_mask.slice(7-bit_offset, -1);
  return !!(byte & mask)
}

const Board = ({ state }) => {
  const items = [];

  for( let x=0;x<state.width;x++){
    for( let y=0;y<state.height;y++){
      items.push(<Cell x={ x } y={ y } alive={ get_bit( state, x, y )} key={ `${x}.${y}` } />)
    }
  }

  return (
    <Container width={ state.width } height={ state.height}>
      { items }
    </Container>
  )
}

export default Board;
