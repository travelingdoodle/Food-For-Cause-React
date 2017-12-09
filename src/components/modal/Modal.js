import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
    // overlay : {
    //   position          : 'fixed',
    //   top               : 0,
    //   left              : 0,
    //   right             : 0,
    //   bottom            : 0,
    //   backgroundColor   : 'rgba(0, 0, 0, 0.75)'
    // },
    // content : {
    //   position                   : 'absolute',
    //   top                        : '40px',
    //   left                       : '40px',
    //   right                      : '40px',
    //   bottom                     : '40px',
    //   border                     : '1px solid #ccc',
    //   background                 : '#fff',
    //   overflow                   : 'auto',
    //   WebkitOverflowScrolling    : 'touch',
    //   borderRadius               : '4px',
    //   outline                    : 'none',
    //   padding                    : '20px'
    // }
};

export default class Test extends React.Component {
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
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Are You Sure?</h2>
          <button onClick={this.closeModal}>close</button>
          <form>
            <button>Submit</button>
            <button>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<Test />, appElement);
