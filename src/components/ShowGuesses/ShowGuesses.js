import React from 'react';

function ShowGuesses({prevGuesses}) {
  return (
    <>
      <div className="guess-results">
        {prevGuesses.map(prevGuess => (
          <p 
            key={crypto.randomUUID()}
            className="guess"
          >
            {prevGuess}
          </p>
        ))}
        
      </div>
    </>
  );
}

export default ShowGuesses;
