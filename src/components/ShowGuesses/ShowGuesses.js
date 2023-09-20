import React from 'react';

function ShowGuesses({prevGuesses}) {
  return (
    <>
      <div className="guess-results">
        {prevGuesses.map((prevGuess, index) => (
          <p 
            key={index}
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
