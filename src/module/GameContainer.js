import React, { useState } from 'react';
import FieldContainer from './FieldContainer';
import InformationContainer from './InformationContainer';
import GameLayout from './GameLayout';

const GameContainer = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const handleCellClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      const newField = [...field];
      newField[index] = currentPlayer;
      setField(newField);

      if (checkWin(newField)) {
        setIsGameEnded(true);
      } else if (newField.every(cell => cell !== '')) {
        setIsDraw(true);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const checkWin = (field) => {
    const WIN_PATTERNS = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return WIN_PATTERNS.some(pattern => {
      const [a, b, c] = pattern;
      return field[a] && field[a] === field[b] && field[a] === field[c];
    });
  };

  const restartGame = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <GameLayout>
      <InformationContainer
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <FieldContainer field={field} onCellClick={handleCellClick} />
      <button onClick={restartGame}>Начать заново</button>
    </GameLayout>
  );
};

export default GameContainer;
