import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldLayout.css';

const FieldLayout = ({ field, onCellClick }) => {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button key={index} className={styles.cell} onClick={() => onCellClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
