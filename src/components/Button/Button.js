import React from "react";
import PropTypes from "prop-types";

import styles from "components/Button/Button.module.css";

/**
 * Beautiful component.
 * @param {object} props
 * @param {bool} props.number display number
 * @param {bool} props.label additional label under number (optional)
 * @param {bool} props.onClick callback executed when button is pressed
 */
function Button({ number, label, onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

Button.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: "",
};

export default Button;
