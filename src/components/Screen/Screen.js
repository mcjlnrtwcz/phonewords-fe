import React from "react";
import PropTypes from "prop-types";

import styles from "components/Screen/Screen.module.css";

/**
 * Screen of a phone
 * @param {object} props
 * @param {bool} props.content will be displayed on the screen
 */
function Screen({ content }) {
  return (
    <div className={styles.screen}>
      <span className={styles.content}>{content}</span>
    </div>
  );
}

Screen.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Screen;
