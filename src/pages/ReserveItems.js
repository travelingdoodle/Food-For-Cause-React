import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ItemsAvailable from "../components/ItemsAvailable";
import Footer from "../components/Footer";

const ReserveItems = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAvailable />
    <Footer />
  </div>
);

export default ReserveItems;
