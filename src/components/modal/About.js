import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Logo from '../../assets/img/logo2.png';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '200px',
    left: '200px',
    right: '200px',
    bottom: '200px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
};

// export default class About extends React.Component {
const About = () => (
  <Modal
    isOpen={this.state.modalIsOpen}
    onAfterOpen={this.afterOpenModal}
    onRequestClose={this.closeModal}
    style={customStyles}
    contentLabel="Example Modal"
      >
    <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
    <form className="about-inner">
      <img style={{ height: '5em' }} src={Logo} />
      <h2 className="about-heading ">About Food For Cause</h2>
      <hr style={{ width: '36%', float: 'left', clear: 'both' }} />
      <p>Food For Cause provides a platform to connect local community outreach programs, like food banks and kitchens,
            with companies that have food to donate. This is our final project at the University of Kansas Fullstack
            coding bootcamp.
      </p>
      <br />
      <h4 style={{ fontWeight: '600', textTransform: 'uppercase' }}>Why are Donations so Important?</h4>
      <hr style={{ width: '40%', float: 'left', }} />
      <p>Donating wholesome food to community progams diverts food waste from landfills and puts food on
            the table for families in need. Donations of non-perishable and unspoiled perishable food from businesses
            (farms | restaurants | groceries) help stock the shelves at local food banks, soup kitchens, pantries, and shelters. 
            Donations from food establishments play an important role in feeding families in our community.
      </p>
    </form>
  </Modal>
);

export default About;
