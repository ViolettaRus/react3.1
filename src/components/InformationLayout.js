import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationLayout.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let message;
  if (isDraw) {
    message = 'Ничья';
  } else if (isGameEnded) {
    message = `Победа: ${currentPlayer}`;
  } else {
    message = `Ходит: ${currentPlayer}`;
  }

  return (
    <div className={styles.information}>
      {message}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
