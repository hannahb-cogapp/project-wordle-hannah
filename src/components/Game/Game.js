import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    console.log(answer);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      { gameStatus === 'won' && 
        <Banner 
          state='happy' 
          attempts={guesses.length} 
          answer={answer} 
          setAnswer={setAnswer} 
          setGameStatus={setGameStatus}
          setGuesses={setGuesses}
        />
      }
      { gameStatus === 'lost' && 
        <Banner 
          state='sad' 
          attempts={guesses.length} 
          answer={answer} 
          setAnswer={setAnswer} 
          setGameStatus={setGameStatus}
          setGuesses={setGuesses}
        />
      }
    </>
  );
}

export default Game;
