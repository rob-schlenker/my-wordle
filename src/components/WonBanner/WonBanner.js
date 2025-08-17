import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({numOfGusses}) {
  return <Banner status="happy">
    <p><strong>Congratulations</strong>{' '}Got it in{' '}
    <strong>
      {numOfGusses === 1 ? '1 guess' : `${numOfGusses} guesses`}
    </strong>
    </p>
  </Banner>;
}

export default WonBanner;
