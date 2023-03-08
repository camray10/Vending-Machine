import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
          <div className="insideVending">
            <p>Vending Machine Menu!</p>
            <Link exact="true" to="/fruits">
                Fruits
            </Link>
            <Link exact="true" to="/veggies">
                Vegetables
            </Link>
            <Link exact="true" to="/candy">
                Candy
            </Link>
          </div>
      );
    };
    

export default Home;