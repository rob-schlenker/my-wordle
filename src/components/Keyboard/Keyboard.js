import React from "react";


  const ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function getStatusByLetter(validatedGuesses) {
    const obj = {};
    const allLetters = validatedGuesses.flat();

    allLetters.forEach(({ letter, status }) => {
      const currentStatus = obj[letter];
      if (currentStatus === undefined) {
        obj[letter] = status;
        return;
    };

 const STATUS_RANKS = {
    correct: 2,
    misplaced: 1,
    incorrect: 0,
  };

      const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return obj;

  }

const Keyboard = ({ validatedGuesses }) => {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
