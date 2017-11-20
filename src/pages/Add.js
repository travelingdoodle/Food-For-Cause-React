import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ItemsAdd from "../components/ItemsAdd";
import Footer from "../components/Footer";

const Add = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAdd />
    <Footer />
  </div>
);

export default Add;