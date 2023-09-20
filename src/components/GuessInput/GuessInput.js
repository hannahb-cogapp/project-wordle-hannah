import React from 'react';

function GuessInput({prevGuesses, setPrevGuesses}) {
  const [guess, setGuess] = React.useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    console.log( {guess} );
    setGuess('');
    
    if (prevGuesses.length > 4) {
      alert('Max. 5 guesses reached');
      return;
    }

    prevGuesses.push(guess);
    nextPrevGuesses = [...prevGuesses];
    setPrevGuesses(nextPrevGuesses);

  }

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label 
          htmlFor="guess-input">
            Enter guess:
        </label>
        <input 
          id="guess-input" 
          type="text" 
          value={guess}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}/>
      </form>
      <p>Search term: {guess}</p>
    </>

  );
}

export default GuessInput;
