import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad">
      <p>
        Got it in Sorry, the correct answer was{" "}
        <strong>{answer}</strong>.
        <button onClick={handleRestart}>Play Again</button>
      </p>
    </Banner>
  );
}

export default LostBanner;
