import React from "react";
import "./UserInfo.css";
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 1000
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '30%'
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
      <main role="main">
      <div className="container bio">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <img className="rounded-circle" src="https://www.catholic.edu/assets/images/default_profile.jpg" alt="Placeholder" height="150" />
            <h2><span>Name/Organization</span></h2>
            <br />
          </div>
        </div>

        <table className="table contact">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-left">
              <h3>Contact information</h3>
              <hr />
              <tbody>
                <tr>
                  <td>
                    <h5>Phone Number</h5>
                  </td>
                  <td><span>(555) 555-5555</span>
                    <p><a className="btn btn-outline-info" href="#" role="button">Edit</a></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Email Address</h5>
                  </td>
                  <td><span>none@none.com</span>
                    <p><a className="btn btn-outline-info" href="#" role="button">Edit</a></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Address</h5>
                  </td>
                  <td><span>123 N Main St<br /></span>
                    <span>Kansas City, MO 64111<br /></span>
                    <p><a className="btn btn-outline-info" href="#" role="button">Edit</a></p>
                  </td>
                </tr>
              </tbody>
              <hr />
            </div>
          </div>
        </table>

        <div className="container reserved">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-left">
              <h3>Reserved items</h3>
              <div className="table-responsive">
                  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Category</th>
                          <th>Quantity (Lbs)</th>
                          <th>Expiration (Days)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1,001</td>
                          <td>Lorem</td>
                          <td>ipsum</td>
                          <td>dolor</td>
                          <td>sit</td>
                          <td><button onClick={this.openModal} type="button" className="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                          <td>1,002</td>
                          <td>amet</td>
                          <td>consectetur</td>
                          <td>adipiscing</td>
                          <td>elit</td>
                          <td><button type="button" className="btn btn-danger">Remove</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container listed">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-left">
              <h3>Listed items</h3>
              <div className="table-responsive">
                  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Category</th>
                          <th>Quantity (Lbs)</th>
                          <th>Expiration (Days)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1,001</td>
                          <td>Lorem</td>
                          <td>ipsum</td>
                          <td>dolor</td>
                          <td>sit</td>
                          <td><button type="button" className="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr>
                          <td>1,002</td>
                          <td>amet</td>
                          <td>consectetur</td>
                          <td>adipiscing</td>
                          <td>elit</td>
                          <td><button type="button" className="btn btn-danger">Remove</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <hr className="divider" />
                  </div>
                </div>
            </div>
          </div>
        </div>
     </main>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="modal-heading" ref={subtitle => this.subtitle = subtitle}>Are You Sure?</h2>
          <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
          <form>
            <p className="modal-inner"></p>
            <button className="btn btn-danger">Confirm</button>
          </form>
        </Modal>
      </div>
    );
  }
}
