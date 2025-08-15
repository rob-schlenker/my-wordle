import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, SetGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    SetGuesses([...guesses, guess]);
    console.log(guesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      Put a game here!
    </>
  );
}

export default Game;
