import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Type from "./components/TestTypeComponent/Type";

function App() {
  return (
    <div className={styles.root}>
      <Header/>

      <Type/>
    </div>
  );
}

export default App;
