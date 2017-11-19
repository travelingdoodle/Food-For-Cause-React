import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Items from "./components/Items";
import Footer from "./components/Footer";

const App = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <Items />
    <Footer />
  </div>
);

export default App;
