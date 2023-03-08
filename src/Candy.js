import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Candy.css"

function Candy() {
  const [candyCount, setCandyCount] = useState(0);

  const handleCandyClick = () => {
    setCandyCount(candyCount + 1);
  };

  return (
    <div>
      <div className="candy">
        <br></br>
        <h1>Press to get candy!</h1>
        <p>You currently have {candyCount} pieces of candy.</p>
        <button onClick={handleCandyClick}>Get Candy</button>
        <br></br>
        <Link exact="true" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Candy;
