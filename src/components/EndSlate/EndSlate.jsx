import styles from "./EndSlate.module.scss"

const EndSlate = ({stateObject}) => {
    function getWordsTyped() {
        var typedSplit = stateObject.oj.currentTyped.split(" ");

        return typedSplit.length;
    }

    return (
        <div className={styles.root}>
            Words Typed: {getWordsTyped()}
        </div>
    );
}

export default EndSlate;