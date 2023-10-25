import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const letterStatus = value ? checkGuess(value, answer) : undefined;
  
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={ letterStatus ? letterStatus[num].status + ' cell' : 'cell' }>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
