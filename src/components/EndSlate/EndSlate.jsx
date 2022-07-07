import { GAME_TIMER } from "../../lib/GameLib";
import styles from "./EndSlate.module.scss"

const EndSlate = ({stateObject}) => {
    function getWordsTyped() {
        if(stateObject.endState == null) return null;
        console.log(stateObject.endState.oj);
        var typedSplit = stateObject.endState.oj.currentTyped.split(" ");

        return typedSplit.length;
    }

    function getWPM() {
        if(stateObject.endState == null) return null;
        return getWordsTyped() / (GAME_TIMER / 60);
    }

    return (
        <div className={styles.root}>
            <div>Words Typed: {getWordsTyped()}</div>
            <div>WPM: {getWPM()}</div>
        </div>
    );
}

export default EndSlate;