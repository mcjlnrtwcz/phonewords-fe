import React from "react";
import PropTypes from "prop-types";

import styles from "components/Keypad/Keypad.module.css";
import Button from "components/Button/Button";

/**
 * Keypad with 9 buttons (1-9) including letters
 * @param {object} props
 * @param {bool} props.onPress callback executed when button is pressed, number passed as an argument
 */
function Keypad({ onPress }) {
  return (
    <div className={styles.keypad}>
      <Button number="1" />
      <Button number="2" label="ABC" onPress={onPress} />
      <Button number="3" label="DEF" onPress={onPress} />
      <Button number="4" label="GHI" onPress={onPress} />
      <Button number="5" label="JKL" onPress={onPress} />
      <Button number="6" label="MNO" onPress={onPress} />
      <Button number="7" label="PQRS" onPress={onPress} />
      <Button number="8" label="TUV" onPress={onPress} />
      <Button number="9" label="WXYZ" onPress={onPress} />
    </div>
  );
}

Keypad.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Keypad;
