import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ItemsAvailable from "../components/ItemsAvailable";

const ReserveItems = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAvailable />
  </div>
);

export default ReserveItems;
