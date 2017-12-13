import React from 'react';
import './ItemsAvailable.css';
import Modal from 'react-modal';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  minRows: 15,
  pageSizeOptions: [15, 20, 25, 50, 100],
})

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
    width: '45%',
  },
};

export default class Main extends React.Component {
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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }
 
  render() {
    const { data } = this.state;
    return (
      <div>
        <section className="container content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-uppercase">
              <h2 style={{ color: 'maroon', fontWeight: '600',}}> Notice: </h2>
              <p style={{ fontWeight: '600' }}>As items are parishable, please review the expiration date and plan accordingly. Reserved items must be picked up within 24 hours, otherwise, they will be released. Thank you for your understanding.</p>
              <hr className="divider" />
            </div>
          </div>

        <div className="col-lg-8 offset-lg-2 text-center">
          <ReactTable
          data={[{
            itemID: "1", 
            item: "Fish",
            category: "Proteins",
            quantity: "100",
            expiration: "2",
            reserve: "0"
          }]}
          columns={[
                {
                  Header: "#",
                  accessor: "itemID",
                  width: 100
                },
                {
                  Header: "Item",
                  accessor: "item",
                },
                {
                  Header: "Category",
                  id: "category",
                  accessor: d => d.category
                },
                {
                  Header: "Quantity (lbs)",
                  accessor: "quantity"
                },
                {
                  Header: "Expiration",
                  accessor: "expiration"
                },
                {
                  Header: "Reserve",
                  Cell: row => (<button onClick={this.openModal} className="btn btn-outline-warning">Reserve</button>)
                }
              ]
            }
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
      <div className="col-lg-8 offset-lg-2">
        <hr className="divider" />
      </div>

        {/* <div className="container table">
          <div className="col-lg-3 col-md-6 offset-lg-6 offset-md-6">
              <div className="input-group searchbar">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Search!</button>
                  <br />
                </span>
              </div>
          </div>

            <div className="col-lg-8 offset-lg-2 text-left">
              <h2 className="available-heading">Available Items</h2>
                <div className="table-responsive available">
                  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <table className="table table-striped">
                      <thead className="table-header">
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Category</th>
                          <th>Quantity (Lbs)</th>
                          <th>Expiration (Days)</th>
                          <th>Reserve</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1,001</td>
                          <td>Lorem</td>
                          <td>ipsum</td>
                          <td>dolor</td>
                          <td>sit</td>
                          <td><button onClick={this.openModal} type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,002</td>
                          <td>amet</td>
                          <td>consectetur</td>
                          <td>adipiscing</td>
                          <td>elit</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>Integer</td>
                          <td>nec</td>
                          <td>odio</td>
                          <td>Praesent</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>libero</td>
                          <td>Sed</td>
                          <td>cursus</td>
                          <td>ante</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,004</td>
                          <td>dapibus</td>
                          <td>diam</td>
                          <td>Sed</td>
                          <td>nisi</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,005</td>
                          <td>Nulla</td>
                          <td>quis</td>
                          <td>sem</td>
                          <td>at</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,006</td>
                          <td>nibh</td>
                          <td>elementum</td>
                          <td>imperdiet</td>
                          <td>Duis</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,007</td>
                          <td>sagittis</td>
                          <td>ipsum</td>
                          <td>Praesent</td>
                          <td>mauris</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,008</td>
                          <td>Fusce</td>
                          <td>nec</td>
                          <td>tellus</td>
                          <td>sed</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,009</td>
                          <td>augue</td>
                          <td>semper</td>
                          <td>porta</td>
                          <td>Mauris</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,010</td>
                          <td>massa</td>
                          <td>Vestibulum</td>
                          <td>lacinia</td>
                          <td>arcu</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,011</td>
                          <td>eget</td>
                          <td>nulla</td>
                          <td>Class</td>
                          <td>aptent</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,012</td>
                          <td>taciti</td>
                          <td>sociosqu</td>
                          <td>ad</td>
                          <td>litora</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,013</td>
                          <td>torquent</td>
                          <td>per</td>
                          <td>conubia</td>
                          <td>nostra</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,014</td>
                          <td>per</td>
                          <td>inceptos</td>
                          <td>himenaeos</td>
                          <td>Curabitur</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,015</td>
                          <td>sodales</td>
                          <td>ligula</td>
                          <td>in</td>
                          <td>libero</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,016</td>
                          <td>sagittis</td>
                          <td>ipsum</td>
                          <td>Praesent</td>
                          <td>mauris</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,017</td>
                          <td>Fusce</td>
                          <td>nec</td>
                          <td>tellus</td>
                          <td>sed</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,018</td>
                          <td>augue</td>
                          <td>semper</td>
                          <td>porta</td>
                          <td>Mauris</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,019</td>
                          <td>massa</td>
                          <td>Vestibulum</td>
                          <td>lacinia</td>
                          <td>arcu</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,020</td>
                          <td>eget</td>
                          <td>nulla</td>
                          <td>Class</td>
                          <td>aptent</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,021</td>
                          <td>taciti</td>
                          <td>sociosqu</td>
                          <td>ad</td>
                          <td>litora</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,022</td>
                          <td>torquent</td>
                          <td>per</td>
                          <td>conubia</td>
                          <td>nostra</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,023</td>
                          <td>per</td>
                          <td>inceptos</td>
                          <td>himenaeos</td>
                          <td>Curabitur</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,024</td>
                          <td>sodales</td>
                          <td>ligula</td>
                          <td>in</td>
                          <td>libero</td>
                          <td><button type="button" className="btn btn-outline-warning">Reserve</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                      </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                  </ul>
                  </nav>
                </div>
              </div>
              <hr className="divider" />
            </div>
          </div> */}
          
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="modal-heading" ref={subtitle => this.subtitle = subtitle}>Item Reserved!</h2>
          <button className="btn btn-default close-modal" onClick={this.closeModal}>close</button>
          <form>
            <p className="modal-inner">Please pickup your item before the expiration date. Any item that has not been picked up within 24 hours will be released.</p>
            <button className="btn btn-danger">Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}
