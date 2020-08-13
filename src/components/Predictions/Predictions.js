import React from "react";
import PropTypes from "prop-types";

import styles from "components/Predictions/Predictions.module.css";

/**
 * Beautiful component.
 * @param {object} props
 * @param {bool} props.isBeautiful does it look good?
 */
function Predictions() {
  const example = ["AB", "BC", "CD", "AA", "BB"];
  return (
    <div className={styles.predictions}>
      {example.map((prediction) => (
        <span className={styles.prediction}>{prediction}</span>
      ))}
    </div>
  );
}

Predictions.propTypes = {};

export default Predictions;
