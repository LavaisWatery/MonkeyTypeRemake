import styles from "./TypeGame.module.scss"
import { gameKeyDown, layitout } from "../../lib/GameLib"
import { useEffect } from "react";
import { useState } from "react";
import EndSlate from "../EndSlate/EndSlate";

const TypeGame = ({stateObject}) => {
    var endSlateModal = document.getElementById("endSlate");
    const [currentTime, setCurrentTime] = useState(null);
    
    function calculateTime() {
        return currentTime != null ? Math.floor((stateObject.gameObject.endTime.getTime() - currentTime.getTime()) / 1000) : -9999;
    }

    document.onkeydown = function (e) {
        gameKeyDown(e, stateObject);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            var calcTime = calculateTime();
            if(stateObject.gameObject.endTime == null) return; // Game hasn't started yet

            setCurrentTime(new Date());

            if(calcTime != -9999 && calcTime <= 0) { // Game has ended!
                stateObject.gameObject.endTime = null;
                setCurrentTime(null);

                stateObject.setEndState({oj: stateObject.gameObject});
                endSlateModal.style.display = "block";

                return;
            }
        }, 10);

        return () => clearTimeout(timer);
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == endSlateModal) {
            endSlateModal.style.display = "none";
        }
    }

    return (
        <div className={styles.type}>
            <div className={styles.combo}>
                <div>Combo: {stateObject.gameObject.combo}</div>
                <div>{calculateTime()}</div>
            </div>

            {layitout(stateObject)}

            <div id="endSlate" className={styles.modal}>
                <div className={styles.modal_content}>
                    <EndSlate stateObject={stateObject} />
                </div>
            </div>
        </div>
    );
}

export default TypeGame;