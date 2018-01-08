import React from 'react';
import Modal from 'react-modal';
import './ItemsAvailable.css';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { ReactTableDefaults } from 'react-table';

Object.assign(ReactTableDefaults, {
  minRows: 10,
  pageSizeOptions: [10, 25, 50, 75, 100],
});

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
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '45%',
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

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <section className="container content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-uppercase">
              <h2
                style={{
                color: 'maroon',
                fontWeight: '600',
              }}
              >Notice:
              </h2>
              <p style={{ fontWeight: '600' }}>As items are parishable, please review the expiration date and plan accordingly. Reserved items must be picked up within 24 hours, otherwise, they will be released. Thank you for your understanding.</p>
              <hr className="divider" />
            </div>
          </div>

          <div className="col-lg-10 offset-lg-1 text-center">
            <ReactTable
              data={[{
            itemID: 'hello',
            item: 'hello',
            category: 'hello',
            quantity: 'hello',
            expiration: 'hello',
            reserve: 'hello',
          }]}
              columns={[
                {
                  Header: '#',
                  accessor: 'itemID',
                  width: 100,
                },
                {
                  Header: 'Item',
                  accessor: 'item',
                },
                {
                  Header: 'Category',
                  id: 'category',
                  accessor: d => d.category,
                },
                {
                  Header: 'Quantity (lbs)',
                  accessor: 'quantity',
                },
                {
                  Header: 'Expiration',
                  accessor: 'expiration',
                },
                {
                  Header: 'Reserve',
                  Cell: row => (<button className="btn btn-outline-warning">Reserve</button>),
                },
              ]
            }
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
          <div className="col-lg-8 offset-lg-2">
            <hr className="divider" />
          </div>
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="modal-heading" ref={ subtitle => this.subtitle = subtitle }>Item Reserved!</h2>
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
