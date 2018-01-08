
import React from 'react';
import Modal from 'react-modal';
import Request from '../../agent';
import './ItemsAdd.css';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
  },
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);

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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  state = {
    name: "",
    category: "",
    quantity: "",
    expiration: "",
  }


  postItem = (name, category, quantity, expiration) => {
    // let item = {
    //   name: name,
    //   category: category,
    //   quantity: quantity,
    //   expiration: expiration,
    // }
    Request.Items.donate(name, category, quantity, expiration)
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

  render(props) {
    return (
      <div>
        <section className="container donator">
          <div className="row">
            <div className="col-lg-8 mx-auto text-left">
              <h3 className="section-heading">Donations</h3>
              <hr />
              <br />
              <form />
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Item Name..." />
              </div>
              <div className="form-group">
                <label htmlFor="" id="category">Category</label>
                <select className="form-control" id="category">
                  <option defaultValue="">All Categories</option>
                  <option name="Proteins" value="Proteins">Proteins</option>
                  <option name="Grains" value="Grains">Grains</option>
                  <option name="Vegetables" value="Vegetables">Vegetables</option>
                  <option name="Fruits" value="Fruits">Fruits</option>
                  <option name="Dairy" value="Dairy">Dairy</option>
                  <option name="Oils" value="Oils">Oils</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Quantity</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.quantity}
                  name="quantity"
                  type="text"
                  className="form-control"
                  id="quantity"
                  placeholder="Quantity in pounds..." />
              </div>
              <div className="form-group">
                <label htmlFor="">Expiration</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.expiration}
                  name="expiration"
                  type="text"
                  className="form-control"
                  id="expiration"
                  data-provide="datepicker"
                  placeholder="Days until expiration..." />
              </div>
              <button onClick={this.handleFormSubmit} className="btn btn-secondary add" type="button">Add Items!</button>
            </div>
          </div>
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="modal-heading" ref={subtitle => this.subtitle = subtitle}>Thanks!</h2>
          <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
          <form>
            <p className="modal-inner">Your donation has been added!</p>
          </form>
        </Modal>
      </div>
    );
  }
}
