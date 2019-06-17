import React, { useContext } from "react";
import styled from "styled-components";

import State from "../state";
import Cell from "./Cell";

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(${props => props.height}, 1fr);
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  margin: 2rem;
  width: 90vh;
  height: 90vh;
`;

const get_bit = (width, height, buffer, x, y) => {
  const base_mask = "00000000";
  const view = new Uint8Array(buffer);
  const byte_offset = Math.floor((width * y + x) / 8);
  const bit_offset = (width * y + x) % 8;
  const byte = view[byte_offset];
  const mask =
    base_mask.slice(0, 7 - bit_offset) +
    "1" +
    base_mask.slice(7 - bit_offset, -1);
  return !!(byte & mask);
};

const Board = () => {
  const { width, height, buffers, front_buffer, generation } = useContext(
    State
  );
  const items = [];

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      items.push(
        <Cell
          x={x}
          y={y}
          alive={get_bit(width, height, buffers[front_buffer], x, y)}
          key={`${x}.${y}`}
        />
      );
    }
  }

  console.log(generation);

  return (
    <>
      <Container width={width} height={height}>
        {items}
      </Container>
      <p>Generation: {generation}</p>
    </>
  );
};

export default Board;
