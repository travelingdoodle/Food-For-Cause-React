
import React from 'react';
import './Carousel.css';
import Community from '../../assets/img/community.png';
import Skyline from '../../assets/img/kcSkyline.png';
import FoodBank from '../../assets/img/foodBank.png';
import Logo from '../../assets/img/logo2.png';

import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 1000,
  },
  content : {
    position                   : 'absolute',
    top                        : '200px',
    left                       : '200px',
    right                      : '200px',
    bottom                     : '200px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
  },
}; 

export default class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
  //  this.subtitle.style.color = '#f00';
 }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="first-slide" src={Skyline} alt="Kansas City Skyline" />
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h1 className="carousel-heading">Welcome</h1>
                    <p className="carousel-subheading">Food For Cause is proudly based out of Kansas City, Missouri.</p>
                    <br />
                    <p><a className="btn btn-lg btn-primary" onClick={this.openModal} role="button">About Us</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" src={Community} alt="Community" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="carousel-heading">Our Mission</h1>
                  <p className="carousel-subheading">Help supply local food pantries, to make Kansas City a better place.</p>
                  <p><a className="btn btn-lg btn-primary" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="third-slide" src={FoodBank} alt="FoodBank" />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1 className="carousel-heading">Help Our Community</h1>
                  <p className="carousel-subheading">Roughly 72 billion pounds of food in the United States is thrown away every year.</p>
                  <p><a className="btn btn-lg btn-primary" href="http://www.feedingamerica.org/our-work/our-approach/reduce-food-waste.html" rel="noopener noreferrer" target="_blank" role="button">Resource</a></p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
          <form className="about-inner">
          <img style={{height:'5em'}} src={Logo} alt="FFC" />

            <h2 className="about-heading ">About Food For Cause</h2>
            <hr style={{ width:'36%', float:'left', clear:'both' }} />
            <p>Food For Cause provides a platform to connect local community outreach programs, like food banks and kitchens,
              with companies that have food to donate. This is our final project at the University of Kansas Fullstack
              coding bootcamp.
            </p>
            <br />
            <h4 style={{ fontWeight: '600', textTransform: 'uppercase' }}>Why are Donations so Important?</h4>
            <hr style={{ width: '40%', float: 'left' }} />
            <p>Donating wholesome food to community progams diverts food waste from landfills and puts food on
              the table for families in need. Donations of non-perishable and unspoiled perishable food from businesses 
              (farms | restaurants | groceries) help stock the shelves at local food banks, soup kitchens, pantries, and shelters. 
              Donations from food establishments play an important role in feeding families in our community.</p>
          </form>
        </Modal>
      </div>
    );
  }
}
