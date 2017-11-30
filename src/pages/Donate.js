import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import ItemsAdd from '../components/itemsadd/ItemsAdd';
import Footer from '../components/footer/Footer';

const Donate = () => (
  <div className="container">
    <Navbar />
    <Carousel />
    <ItemsAdd />
    <Footer />
  </div>
);

export default Donate;
