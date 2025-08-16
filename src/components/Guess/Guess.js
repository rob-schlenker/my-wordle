import React from "react";
import { range } from "../../utils";

function Guess({value}) {
  const rows = range(5)
  const cells = range(5);
  return (
    <p className="guess">{value.split('').map((letter, index) => (
      <span className="cell">{letter}</span>
    ))}
    </p>
    // <div className="guess-results">
    //   {rows.map((row) => (
    //     <p className="guess">
    //     {cells.map((cell) => (
    //       <span className="cell">
            
    //       </span>
    //     ))}  
    //     </p>
    //   ))}
    //   {/* <p className="guess">
    //     <span className="cell">H</span>
    //     <span className="cell">E</span>
    //     <span className="cell">L</span>
    //     <span className="cell">L</span>
    //     <span className="cell">O</span>
    //   </p> */}
    // </div>
  );
}

export default Guess;
