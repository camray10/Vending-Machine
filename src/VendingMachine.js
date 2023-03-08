import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Fruits from "./Fruits";
import Veggies from "./Veggies";
import Candy from "./Candy";

const VendingMachine = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/"> <Home /></Route>
        <Route exact path="/fruits"> <Fruits /></Route>
        <Route exact path="/veggies"> <Veggies /></Route>
        <Route exact path="/candy"> <Candy /></Route>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;