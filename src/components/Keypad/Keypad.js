import React from "react";
import PropTypes from "prop-types";

import styles from "components/Keypad/Keypad.module.css";
import Button from "components/Button/Button";

/**
 * Beautiful component.
 * @param {object} props
 * @param {bool} props.isBeautiful does it look good?
 */
function Keypad() {
  return (
    <div className={styles.keypad}>
      <Button number="1" />
      <Button number="2" />
      <Button number="3" />
      <Button number="4" />
      <Button number="5" />
      <Button number="6" />
      <Button number="7" />
      <Button number="8" />
      <Button number="9" />
    </div>
  );
}

Keypad.propTypes = {};

export default Keypad;
