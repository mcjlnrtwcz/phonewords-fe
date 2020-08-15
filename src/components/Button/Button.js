import React from "react";
import PropTypes from "prop-types";

import styles from "components/Button/Button.module.css";

/**
 * Round button with numeric value
 * @param {object} props
 * @param {bool} props.number display number
 * @param {bool} props.label additional label under number (optional)
 * @param {bool} props.onPress callback executed when button is pressed, number passed as an argument
 */
function Button({ number, label, onPress }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => onPress(number)}
    >
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

Button.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  onPress: () => {},
};

export default Button;
