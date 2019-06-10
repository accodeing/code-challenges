import React from 'react';

import './App.css';
import Board from './components/Board'

const state = {
  width: 8,
  height: 8,
  front_buffer: 0,
  back_buffer: 1,
  buffers: [
    new ArrayBuffer(8*8),
    new ArrayBuffer(8*8)
  ]
}

const uint8 = new Uint8Array( state.buffers[ state.front_buffer ] );
uint8.set([1, 2, 3], 3);

function App() {
  return (
    <Board state={ state } />
  );
}

export default App;
