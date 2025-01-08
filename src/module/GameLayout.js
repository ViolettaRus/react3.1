import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameLayout.css';

const GameLayout = ({ children }) => {
  return <div className={styles.game}>{children}</div>;
};

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameLayout;
