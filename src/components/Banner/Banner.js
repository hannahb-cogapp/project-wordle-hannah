import React from 'react';

function Banner({state, attempts, answer}) {

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
    </div>
  );
}

export default Banner;
