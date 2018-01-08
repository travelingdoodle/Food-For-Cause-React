import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import ItemsAdd from '../components/itemsadd/ItemsAdd';
import Footer from '../components/footer/Footer';

import Request from '../agent';

class Donate extends Component {
  state = {
    name: "",
    category: "",
    quantity: "",
    expiration: "",
  }


  postItem = (name, category, quantity, expiration) => {
    let item = {
      name: name,
      category: category,
      quantity: quantity,
      expiration: expiration,
    }
    Request.Items.donate(item)
    .catch(err => console.log(err));
  }

    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      
      this.postItem(this.state.name, this.state.category, this.quantity, this.state.expiration);
    }

    render() {
      return (
      <div className="container">
        <Navbar />
        <Carousel />
        <ItemsAdd 
        name={this.state.name}
        category={this.state.category}
        quantity={this.state.quantity}
        expiration={this.state.expiration}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
        <Footer />
      </div>
    );
  }
}
export default Donate;
