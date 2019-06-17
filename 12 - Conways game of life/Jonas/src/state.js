import React from "react";

const State = React.createContext();

export const inital_state = {
  width: 8,
  height: 8,
  front_buffer: 0,
  back_buffer: 1,
  buffers: [new ArrayBuffer(8 * 8), new ArrayBuffer(8 * 8)],
  generation: 0,
  delay: 1000
};

export default State;
