import React from "react";
import PropTypes from "prop-types";

import styles from "components/Predictions/Predictions.module.css";

/**
 * Display list of word predictions
 * @param {object} props
 * @param {bool} props.predictions array of word predictions
 */
function Predictions({ predictions }) {
  return (
    <div className={styles.predictions}>
      {predictions.map((prediction) => (
        <span key={prediction} className={styles.prediction}>
          {prediction}
        </span>
      ))}
    </div>
  );
}

Predictions.propTypes = {
  predictions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Predictions;
