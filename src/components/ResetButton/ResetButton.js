import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function ResetButton({ setAnswer, setGameStatus, setGuesses }) {
  function handleSubmit(event) {
    event.preventDefault();
    
    setAnswer(sample(WORDS));
    setGameStatus('running');
    setGuesses([]); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="reset-btn">Reset Game</button>
    </form>
  );
}

export default ResetButton;
