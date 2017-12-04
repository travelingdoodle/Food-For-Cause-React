import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Modal from 'react-modal';
import Logo from '../../assets/img/logo2.png';


const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0, 0, 0, 0.75)'
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
      padding                    : '20px'
    }
};
 
export default class Main extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <div className="container home">
          <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <header className="masthead clearfix">
                <div className="inner">
                <h3 class="masthead-brand"></h3>
                  <nav className="nav nav-masthead">
                    <a onClick={this.openModal} className="nav-link">About Us</a>
                    <a className="nav-link" href="#">Contact</a>
                  </nav>
                </div>
              </header>

              <main role="main" className="inner cover">
                <h1 className="cover-heading">Food For Cause</h1>
                <br />
                <h3 className="lead">Help supply local food pantries, to make Kansas City a better place.</h3>
                <br /><br />
                <Link to="/login" className="btn btn-lg btn-secondary">Login</Link>
              </main>

              <footer className="mastfoot">
                <div className="inner">
                  <p>&copy; 2017 Food For Cause</p>
                </div>
              </footer>
            </div>
          </div>
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
          <img style={{height:'5em'}} src={Logo} />
            <h2 className="about-heading ">About Food For Cause</h2>
              <hr style={{width:'36%', float:'left', clear:'both'}}/>
            <p>Food For Cause provides a platform to connect local community outreach programs, like food banks and kitchens,
              with companies that have food to donate. This is our final project at the University of Kansas Fullstack
              coding bootcamp.</p>
              <br />
            <h4 style={{fontWeight: '600', textTransform: 'uppercase'}}>Why are Donations so Important?</h4>
              <hr style={{width:'40%', float:'left',}}/>
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
