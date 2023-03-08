import React from "react";
import { Link } from "react-router-dom";
import "./Veggies.css"

function Veggies() {
    return (
        <div>
          <div className="veggie">
            <br></br>
            <h1>Why would you want vegetables???</h1>
            <p>Not available in the vending machine.</p>
            <Link exact="true" to="/">
              Home
            </Link>
          </div>
        </div>
      );
    };

export default Veggies;