import React from 'react';
import '../styles/Reserved.css';

const Reserved = () => (
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
                    <th></th>
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
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
  </div>

);

export default Reserved;
