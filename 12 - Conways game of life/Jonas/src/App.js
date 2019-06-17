import React, { useState, useEffect, useContext } from "react";

import "./App.css";
import State, { inital_state } from "./state";
import Board from "./components/Board";

function App() {
  const current_state = useContext(State);
  const [generation, set_gen] = useState(
    current_state ? current_state.generation : 0
  );

  //  const uint8 = new Uint8Array(state.buffers[state.front_buffer]);
  //  uint8.set([1, 2, 3], 3);

  const tick = () => {
    console.log("tick");
    set_gen(generation + 1);
    //logic
  };

  useEffect(() => {
    const timer = window.setInterval(tick, 1000, false);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <State.Provider value={{ ...inital_state, ...current_state, generation }}>
      <Board />
    </State.Provider>
  );
}

export default App;
