import React from "react";
import "../styles/Add.css";

const Add = () => (
    <section className="container donation">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="col-lg-7 offset-lg-2">
                    <h2>Add Donation Here</h2>
                        <hr />
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Item(s)..." aria-label="Item(s)..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Add Items!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <hr className="divider" />
    </section>
);

export default Add;