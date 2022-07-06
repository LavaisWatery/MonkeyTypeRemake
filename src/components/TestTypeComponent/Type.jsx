import { useState } from "react";
import styles from "./Type.module.scss";

const Type = () => {
    const [typeObject, setTypeObject] = useState(createTypeObject("When you're out and about on the Internet, you sometimes see the same thing in multiple places. There's the funny picture of that angry baby again, or the inspirational quote set against the shot of a rocky peak emerging from the clouds, or that plain-text indignant screed about that thing that apparently made several of your Facebook friends identically indignant. That stuff--all that stuff that's been copied over and over--that stuff has a special name: copypasta."));
    
    function createTypeObject(typeString) {
        return { type: typeString, currentTyped: "" }
    }

    function keyDown(e) {
        console.log(e.keyCode)
        if ((e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90) || (e.key==' ' || e.key=="'" || e.key=="," || e.key=="." || e.key=="-" || e.key==":" || e.key==";")) { // They typed a key, number, space
            console.log(e.key);
            e.preventDefault();
            setTypeObject({ type: typeObject.type, currentTyped: typeObject.currentTyped += e.key });
        }
        else if(e.key == "Backspace") {
            console.log(e.key);
            e.preventDefault();
            setTypeObject({ type: typeObject.type, currentTyped: typeObject.currentTyped.slice(0, -1)})
        }
    }
    
    function getCurrentIndex() {
        return typeObject.currentTyped.length;
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
            {layitout()}
        </div>
    );
}

export default Type;