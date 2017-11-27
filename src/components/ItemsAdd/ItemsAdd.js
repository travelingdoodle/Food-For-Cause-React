import React from "react";
import "./ItemsAdd.css";

const Add = () => (
    <section className="container donator">
        <div className="row">
            <div className="col-lg-8 mx-auto text-left">
                <h3 className="section-heading">Donate Item(s)</h3>
                <hr />
                <br />
                <form action="" method="POST" role="form" />
                    <div className="form-group">
                        <label for="">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Item Name..." />
                    </div>
                    <div className="form-group">
                        <label for="" id="category">Category</label>
                        <select className="form-control" id="category">
                            <option selected value="">All Categories</option>
                            <option value="Proteins">Proteins</option>
                            <option value="Grains">Grains</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Oils">Oils</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="">Quantity (Pounds)</label>
                        <input type="text" className="form-control" id="quantity" placeholder="Quantity in pounds..." />
                    </div>
                    <div className="form-group">
                        <label for="">Expiration (Days)</label>
                        <input type="text" className="form-control" id="expiration" data-provide="datepicker" placeholder="Days until expiration..." />
                    </div>
                    <button className="btn btn-secondary add" type="button">Add Items!</button>
            </div>
        </div>
    </section>
);

export default Add;