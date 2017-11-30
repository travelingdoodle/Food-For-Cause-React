import React from "react";
import "./ItemsAvailable.css";

const Items = () => (

<section className="container content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2>Potential Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <hr className="divider" />
          </div>
        </div>
        
        <div className="container table">
          <div className="row">
          <div className="col-lg-3 offset-lg-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Search!</button>
                    <br />
                  </span>
                </div>
                </div>
            <div className="col-lg-8 offset-lg-2 text-left">
              <h2>Available Items</h2>
                <div className="table-responsive available">
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
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,002</td>
                          <td>amet</td>
                          <td>consectetur</td>
                          <td>adipiscing</td>
                          <td>elit</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>Integer</td>
                          <td>nec</td>
                          <td>odio</td>
                          <td>Praesent</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>libero</td>
                          <td>Sed</td>
                          <td>cursus</td>
                          <td>ante</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,004</td>
                          <td>dapibus</td>
                          <td>diam</td>
                          <td>Sed</td>
                          <td>nisi</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,005</td>
                          <td>Nulla</td>
                          <td>quis</td>
                          <td>sem</td>
                          <td>at</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,006</td>
                          <td>nibh</td>
                          <td>elementum</td>
                          <td>imperdiet</td>
                          <td>Duis</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,007</td>
                          <td>sagittis</td>
                          <td>ipsum</td>
                          <td>Praesent</td>
                          <td>mauris</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,008</td>
                          <td>Fusce</td>
                          <td>nec</td>
                          <td>tellus</td>
                          <td>sed</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,009</td>
                          <td>augue</td>
                          <td>semper</td>
                          <td>porta</td>
                          <td>Mauris</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,010</td>
                          <td>massa</td>
                          <td>Vestibulum</td>
                          <td>lacinia</td>
                          <td>arcu</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,011</td>
                          <td>eget</td>
                          <td>nulla</td>
                          <td>Class</td>
                          <td>aptent</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,012</td>
                          <td>taciti</td>
                          <td>sociosqu</td>
                          <td>ad</td>
                          <td>litora</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,013</td>
                          <td>torquent</td>
                          <td>per</td>
                          <td>conubia</td>
                          <td>nostra</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,014</td>
                          <td>per</td>
                          <td>inceptos</td>
                          <td>himenaeos</td>
                          <td>Curabitur</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,015</td>
                          <td>sodales</td>
                          <td>ligula</td>
                          <td>in</td>
                          <td>libero</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,016</td>
                          <td>sagittis</td>
                          <td>ipsum</td>
                          <td>Praesent</td>
                          <td>mauris</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,017</td>
                          <td>Fusce</td>
                          <td>nec</td>
                          <td>tellus</td>
                          <td>sed</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,018</td>
                          <td>augue</td>
                          <td>semper</td>
                          <td>porta</td>
                          <td>Mauris</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,019</td>
                          <td>massa</td>
                          <td>Vestibulum</td>
                          <td>lacinia</td>
                          <td>arcu</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,020</td>
                          <td>eget</td>
                          <td>nulla</td>
                          <td>Class</td>
                          <td>aptent</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,021</td>
                          <td>taciti</td>
                          <td>sociosqu</td>
                          <td>ad</td>
                          <td>litora</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,022</td>
                          <td>torquent</td>
                          <td>per</td>
                          <td>conubia</td>
                          <td>nostra</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,023</td>
                          <td>per</td>
                          <td>inceptos</td>
                          <td>himenaeos</td>
                          <td>Curabitur</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                        <tr>
                          <td>1,024</td>
                          <td>sodales</td>
                          <td>ligula</td>
                          <td>in</td>
                          <td>libero</td>
                          <td><button type="button" className="btn btn-success">Reserve</button></td>
                        </tr>
                       </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">Previous</a>
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
        </div>
    </div>
</section>

);

export default Items;