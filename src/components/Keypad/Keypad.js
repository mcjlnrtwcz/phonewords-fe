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
      <Button number="2" label="ABC" />
      <Button number="3" label="DEF" />
      <Button number="4" label="GHI" />
      <Button number="5" label="JKL" />
      <Button number="6" label="MNO" />
      <Button number="7" label="PQRS" />
      <Button number="8" label="TUV" />
      <Button number="9" label="WXYZ" />
    </div>
  );
}

Keypad.propTypes = {};

export default Keypad;
