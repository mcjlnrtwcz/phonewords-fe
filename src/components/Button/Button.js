import React from "react";
import PropTypes from "prop-types";

import styles from "components/Button/Button.module.css";

/**
 * Round button with numeric value
 * @param {object} props
 * @param {bool} props.label main (big) button label
 * @param {bool} props.smallLabel if label is supplied then it's displayed underneath it
 * @param {bool} props.type sets the color and border (grey, yellow or red)
 * @param {bool} props.onPress callback executed when button is pressed, number passed as an argument
 */
function Button({ label, smallLabel, type, onPress }) {
  return (
    <button type="button" className={styles[type]} onClick={onPress}>
      <span className={styles.label}>{label}</span>
      <span className={styles.smallLabel}>{smallLabel}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  smallLabel: PropTypes.string,
  type: PropTypes.oneOf(["grey", "yellow", "red"]),
  onPress: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  smallLabel: "",
  type: "grey",
  onPress: () => {},
};

export default Button;
