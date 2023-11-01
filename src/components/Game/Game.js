import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameWon, setGameWon] = React.useState(false);
  const [gameLost, setGameLost] = React.useState(false);
  const [inputDisabled, setInputDisabled] = React.useState(false);


  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);

    if (tentativeGuess === answer) {
      setGameWon(true);
      setInputDisabled(true);
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameLost(true);
      setInputDisabled(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} inputDisabled={inputDisabled} />
      { gameWon && <Banner state='happy' attempts={guesses.length} answer={answer} />}
      { gameLost && <Banner state='sad' attempts={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
