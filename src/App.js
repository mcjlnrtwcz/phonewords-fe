import React, { useState } from "react";

import styles from "App.module.css";
import Screen from "components/Screen/Screen";
import Keypad from "components/Keypad/Keypad";
import Predictions from "components/Predictions/Predictions";
import usePredictions from "hooks/usePredictions";

function App() {
  const [input, setInput] = useState("");
  const { predictions, isLoading } = usePredictions(input);

  return (
    <div className={styles.app}>
      <div className={styles.phone}>
        <Screen content={input} />
        <Keypad
          onNumber={(number) => setInput((prev) => `${prev}${number}`)}
          onDelete={() => setInput((prev) => prev.slice(0, prev.length - 1))}
          onClear={() => setInput("")}
        />
      </div>
      <div
        className={`${styles.predictions} ${isLoading ? styles.loading : ""}`}
      >
        {predictions.length === 0 && input.length > 0 ? (
          <span className={styles.noPredictions}>
            Sorry, can&apos;t predict the word
          </span>
        ) : (
          <Predictions predictions={predictions} />
        )}
      </div>
    </div>
  );
}

export default App;
