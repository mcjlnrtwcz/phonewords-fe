import React from "react";
import PropTypes from "prop-types";

import styles from "components/Input/Input.module.css";

/**
 * Beautiful component.
 * @param {object} props
 * @param {bool} props.isBeautiful does it look good?
 */
function Input() {
  return <div className={styles.input}>23</div>;
}

Input.propTypes = {};

export default Input;
