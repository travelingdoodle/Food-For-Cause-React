import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ItemsAvailable from "../components/ItemsAvailable";

const Items = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAvailable />
  </div>
);

export default Items;
