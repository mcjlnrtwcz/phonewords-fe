import React from "react";
import PropTypes from "prop-types";

import styles from "components/Button/Button.module.css";

/**
 * Beautiful component.
 * @param {object} props
 * @param {bool} props.isBeautiful does it look good?
 */
function Button({ number }) {
  return (
    <button type="button" className={styles.button}>
      {number}
    </button>
  );
}

Button.propTypes = {};

export default Button;
