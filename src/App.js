import React, { useState, useCallback } from "react";

import styles from "App.module.css";
import Screen from "components/Screen/Screen";
import Keypad from "components/Keypad/Keypad";
import Predictions from "components/Predictions/Predictions";

function App() {
  const [input, setInput] = useState("");
  const appendInput = useCallback(
    (newValue) => {
      setInput((previousValue) => `${previousValue}${newValue}`);
    },
    [setInput]
  );

  return (
    <div className={styles.app}>
      <div className={styles.phone}>
        <Screen content={input} />
        <Keypad onPress={appendInput} />
      </div>
      <div className={styles.predictions}>
        <Predictions />
      </div>
    </div>
  );
}

export default App;
