import { useState } from "react";
import { createGameObject } from "./lib/GameLib"
import styles from "./App.module.scss";

import Header from "./components/Header/Header";
import TypeGame from "./components/TypeGame/TypeGame";
import EndSlate from "./components/EndSlate/EndSlate";

function App() {
  const [gameObject, setGameObject] = useState(createGameObject("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot."));
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
