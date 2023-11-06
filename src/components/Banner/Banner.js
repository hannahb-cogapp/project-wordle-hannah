import React from 'react';
import ResetButton from '../ResetButton';

function Banner({state, attempts, answer, setAnswer, setGameStatus, setGuesses}) {

  return (
    <div className={`${state} banner`}>
      { state === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> { attempts } { attempts > 1 ? 'guesses' : 'guess'}</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{ answer }</strong>.</p>
      )}
      <ResetButton setAnswer={setAnswer} setGameStatus={setGameStatus} setGuesses={setGuesses} />
    </div>
  );
}

export default Banner;
