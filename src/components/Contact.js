import React from "react";
import "../styles/Contact.css";

const Contact = () => (
    <main role="main">
      <div className="container bio">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <img className="rounded-circle" src="default-profile.png" alt="Placeholder Image" height="150" />
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
            </div>
          </div>
        </table>

        <hr />

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
        </div>
            <hr className="divider" />
     </main>
);

export default Contact;