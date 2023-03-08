import React from "react";
import { Link } from "react-router-dom";
import "./Fruits.css"

function Fruits() {
  return (
    <div>
      <div className="fruit">
        <br></br>
        <h1>Why would you want any fruit???</h1>
        <p>Not available in the vending machine.</p>
        <Link exact="true" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Fruits;