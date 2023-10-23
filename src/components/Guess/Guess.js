import React from 'react';

function Guess({ value }) {
  return (
    <p 
      className="guess"
    >
      <span className="cell">{ value ? value.charAt(0) : '' }</span>
      <span className="cell">{ value ? value.charAt(1) : '' }</span>
      <span className="cell">{ value ? value.charAt(2) : '' }</span>
      <span className="cell">{ value ? value.charAt(3) : '' }</span>
      <span className="cell">{ value ? value.charAt(4) : '' }</span>
    </p>
  );
}

export default Guess;
