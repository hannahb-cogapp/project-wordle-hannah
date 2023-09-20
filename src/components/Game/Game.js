import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import ShowGuesses from '../ShowGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuesses, nextPrevGuesses] = React.useState(['FIRST', 'SECOND']);

  return (
    <>
      <ShowGuesses prevGuesses={prevGuesses} />
      <GuessInput />
    </>
  );
}

export default Game;
