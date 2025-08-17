import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Got it in Sorry, the correct answer was{" "}
        <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
