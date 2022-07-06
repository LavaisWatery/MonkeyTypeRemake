import { useEffect, useState } from "react";
import styles from "./Type.module.scss";

const Type = () => {
    const [typeObject, setTypeObject] = useState(createTypeObject("When you're out and about on the Internet, you sometimes see the same thing in multiple places."));
    const [startTime, setStartTime] = useState(null);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(startTime == null) return;
            setTimer(new Date());
        }, 10);

        return () => clearTimeout(timer);
    });

    function createTypeObject(typeString) {
        return { type: typeString, currentTyped: "", combo: 0 }
    }

    function keyDown(e) {
        if ((e.keyCode >= 48 && e.keyCode <= 57 || 
            e.keyCode >= 65 && e.keyCode <= 90) || 
            (e.key==' ' || e.key=="'" || e.key=="," || e.key=="." || e.key=="-" || e.key==":" || e.key==";")) { // They typed a key, number, space
            if(startTime == null) setStartTime(new Date()); // start timer
            e.preventDefault();
            var nextChar = typeObject.type[typeObject.currentTyped.length];
            var wombo = typeObject.combo;

            if(nextChar == e.key) wombo++;
            else wombo = 0;

            setTypeObject({ type: typeObject.type, currentTyped: typeObject.currentTyped += e.key, combo: wombo});
        }
        else if(e.key == "Backspace") {
            e.preventDefault();
            setTypeObject({ type: typeObject.type, currentTyped: typeObject.currentTyped.slice(0, -1), combo: 0})
        }
    }
    
    function layitout() {
        var elements = [];
        var typeSplit = typeObject.type.split("");
        var typedSplit = typeObject.currentTyped.split("");
        var index = 0;
    
        typeSplit.forEach(char => {
            var typedChar = typedSplit[index];
            var cont = {color: typedChar == null ? "#74666699" : typedChar == char ? "#30f20099" : "#c0232399"};

            elements.push(<span style={cont} key={index}>{char}</span>);
            index++;
        })
    
        return elements;
    }

    document.onkeydown = function (e) {
        keyDown(e);
    }

    return (
        <div className={styles.type}>
            <div className={styles.combo}>
                <div>Combo: {typeObject.combo}</div>
                <div>{timer != null && Math.floor((timer.getTime() - startTime.getTime()) / 1000)}</div>
            </div>
            {layitout()}
        </div>
    );
}

export default Type;