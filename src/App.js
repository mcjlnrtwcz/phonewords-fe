import React from "react";

import styles from "App.module.css";
import Input from "components/Input/Input";
import Keypad from "components/Keypad/Keypad";
import Predictions from "components/Predictions/Predictions";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.phone}>
        <Input />
        <Keypad />
      </div>
      <div className={styles.predictions}>
        <Predictions />
      </div>
    </div>
  );
}

export default App;
