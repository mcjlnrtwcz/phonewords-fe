import React from "react";
import PropTypes from "prop-types";

import styles from "components/Keypad/Keypad.module.css";
import Button from "components/Button/Button";

/**
 * Keypad with 9 buttons (1-9) including letters plus delete and clear button
 * @param {object} props
 * @param {bool} props.onNumber callback executed when number button is pressed (number passed as an argument)
 * @param {bool} props.onDelete callback executed when delete button is pressed
 * @param {bool} props.onClear callback executed when clear button is pressed
 */
function Keypad({ onNumber, onDelete, onClear }) {
  const buttonLabels = [
    ["2", "ABC"],
    ["3", "DEF"],
    ["4", "GHI"],
    ["5", "JKL"],
    ["6", "MNO"],
    ["7", "PQRS"],
    ["8", "TUV"],
    ["9", "WXYZ"],
  ];
  const buttons = buttonLabels.map(([label, smallLabel]) => (
    <Button
      key={label}
      label={label}
      smallLabel={smallLabel}
      onPress={() => onNumber(label)}
    />
  ));

  return (
    <div className={styles.keypad}>
      <Button label="1" />
      {buttons}
      <div className={styles.secondColumn}>
        <Button type="yellow" smallLabel="DEL" onPress={onDelete} />
      </div>
      <div className={styles.thirdColumn}>
        <Button type="red" smallLabel="CLR" onPress={onClear} />
      </div>
    </div>
  );
}

Keypad.propTypes = {
  onNumber: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Keypad;
