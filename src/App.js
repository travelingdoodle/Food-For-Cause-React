import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Add from "./components/Add";
import Footer from "./components/Footer";

const App = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <Add />
    <Footer />
  </div>
);

export default App;
