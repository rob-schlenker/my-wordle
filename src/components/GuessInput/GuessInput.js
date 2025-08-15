import { format } from "prettier";
import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [guess, SetGuess] = React.useState("");

  function getGuess(event) {
    event.preventDefault();
    SetGuess(event);
    handleSubmitGuess(guess);
    SetGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={getGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
          minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          event.preventDefault();
          const nextGuess = event.target.value.toUpperCase();
          SetGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
