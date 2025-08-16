import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const rows = range(5);
  const cells = range(5);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
