export const GAME_TIMER = 5;
// Creates fresh game object from typeString (what we want to type, this will eventually be auto generated)
export function createGameObject(typeString) {
    return { type: typeString, currentTyped: "", combo: 0 }
}

export function toNewGameObject(gameObject) {
    console.log(gameObject);
}

// Handles keyboard presses
export function gameKeyDown(e, stateObjects) {
    if ((e.keyCode >= 48 && e.keyCode <= 57 || 
        e.keyCode >= 65 && e.keyCode <= 90) || 
        (e.key==' ' || e.key=="'" || e.key=="," || e.key=="." || e.key=="-" || e.key==":" || e.key==";" || e.key=="?")) { // They typed a key, number, space
        var gameObject = { ...stateObjects.gameObject };
        if(gameObject.endTime == null) gameObject.endTime = new Date(new Date().getTime() + (1000 * GAME_TIMER)); // start timer
        
        e.preventDefault();
        var nextChar = gameObject.type[gameObject.currentTyped.length];
        var wombo = gameObject.combo;
  
        if(nextChar == e.key) wombo++;
        else wombo = 0;

        gameObject.combo = wombo;
        gameObject.currentTyped = stateObjects.gameObject.currentTyped += e.key;

        stateObjects.setGameObject(gameObject);
    }
    else if(e.key == "Backspace") {
        e.preventDefault();
        gameObject = { ...stateObjects.gameObject, currentTyped: stateObjects.gameObject.currentTyped.slice(0, -1) }

        stateObjects.setGameObject(gameObject)
    }
}

export function layitout(stateObjects) {
    var elements = [];
    var gameObject = stateObjects.gameObject;
    var typeSplit = gameObject.type.split("");
    var typedSplit = gameObject.currentTyped.split("");
    var index = 0;

    typeSplit.forEach(char => {
        var typedChar = typedSplit[index];
        var cont = {color: typedChar == null ? "#74666699" : typedChar == char ? "#30f20099" : "#c0232399"};

        elements.push(<span style={cont} key={index}>{char}</span>);
        index++;
    })

    return elements;
}