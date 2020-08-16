import React, { useState } from "react";

import styles from "App.module.css";
import Screen from "components/Screen/Screen";
import Keypad from "components/Keypad/Keypad";
import Predictions from "components/Predictions/Predictions";
import usePredictions from "hooks/usePredictions";

function App() {
  const [input, setInput] = useState("");
  const { predictions, isLoading, error } = usePredictions(input);

  let resultComponent;
  if (error) {
    resultComponent = (
      <span className={styles.warning}>
        Can&apos;t fetch predictions - API error
      </span>
    );
  } else if (predictions.length === 0 && input.length > 0) {
    resultComponent = (
      <span className={styles.warning}>Sorry, can&apos;t predict the word</span>
    );
  } else {
    resultComponent = <Predictions predictions={predictions} />;
  }

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
        data-testid="predictions"
      >
        {resultComponent}
      </div>
    </div>
  );
}

export default App;
