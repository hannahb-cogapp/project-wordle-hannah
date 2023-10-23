import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function ShowGuesses({prevGuesses}) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
          <Guess key={index} value={prevGuesses[index]} />
        ))}
        
      </div>
    </>
  );
}

export default ShowGuesses;
