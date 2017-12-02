import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Modal from 'react-modal';

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
    this.subtitle.style.color = '#f00';
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
          <h2 className="modal-heading" ref={subtitle => this.subtitle = subtitle}>About Food For Cause</h2>
          <button className="btn btn-secondary close-modal" onClick={this.closeModal}>close</button>
          <form>
            <p className="modal-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta libero id ligula tempor porta. Integer mollis ac elit sit amet porttitor. Nulla auctor metus ipsum, sed lacinia libero rhoncus ut. Ut ipsum mauris, finibus vel rhoncus eget, egestas id massa. Integer tempor condimentum tellus quis elementum. Praesent semper, nisl id bibendum vehicula, elit ligula hendrerit est, quis sollicitudin justo lacus ac massa. Etiam viverra nisl quam, et rhoncus nibh consectetur eget. Etiam nec urna dignissim, dignissim mauris quis, congue ex. Nulla malesuada, elit ac finibus mollis, arcu sem suscipit justo, ac porta leo magna id enim. Proin accumsan mattis pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet erat justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a diam faucibus, mattis massa eu, placerat turpis</p>
          </form>
        </Modal>
      </div>
    );
  }
}
