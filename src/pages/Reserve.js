import React from "react";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import ItemsAvailable from "../components/itemsavailable/ItemsAvailable";
import Footer from "../components/footer/Footer";

const Reserve = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAvailable />
    <Footer />
  </div>
);

export default Reserve;
