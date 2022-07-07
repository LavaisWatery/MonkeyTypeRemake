import styles from "./TypeGame.module.scss"
import { gameKeyDown, layitout } from "../../lib/GameLib"
import { useEffect } from "react";
import { useState } from "react";

const TypeGame = ({stateObject}) => {
    const [currentTime, setCurrentTime] = useState(null);
    document.onkeydown = function (e) {
        gameKeyDown(e, stateObject);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(stateObject.gameObject.endTime == null) return;
            setCurrentTime(new Date());
        }, 10);

        return () => clearTimeout(timer);
    });

    return (
        <div className={styles.type}>
            <div className={styles.combo}>
                <div>Combo: {stateObject.gameObject.combo}</div>
                <div>{currentTime != null && Math.floor((stateObject.gameObject.endTime.getTime() - currentTime.getTime()) / 1000)}</div>
            </div>
            {layitout(stateObject)}
        </div>
    );
}

export default TypeGame;