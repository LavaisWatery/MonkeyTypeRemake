import { useState } from "react";
import { createGameObject } from "./lib/GameLib"
import styles from "./App.module.scss";

import Header from "./components/Header/Header";
import TypeGame from "./components/TypeGame/TypeGame";
import EndSlate from "./components/EndSlate/EndSlate";

function App() {
  const [gameObject, setGameObject] = useState(createGameObject("When you're out and about on the Internet, you sometimes see the same thing in multiple places."));
  const [endState, setEndState] = useState(null);
  const stateDeclerations = {
    gameObject: gameObject,
    setGameObject: setGameObject,
    endState: endState,
    setEndState: setEndState
  }

  return (
    <div className={styles.root}>
      <Header/>

      {endState == null && <TypeGame stateObject={stateDeclerations}/>}
      {endState != null && <EndSlate stateObject={endState}/>}
    </div>
  );
}

export default App;
