import React from "react";
import "./NewUser.css";


const Register = () => (
  <div className="container register"> 
    <form className="form-signin">
      <h2 className="form-signin-heading text-left">Register</h2>
        <hr />
        <br />
      <label for="inputOganization" className="sr-only">Organization</label>
      <input type="Organization" id="inputOrganization" className="form-control" placeholder="Organization" required autofocus />
        <br />
      <label for="inputName" className="sr-only">Your Name</label>
      <input type="Name" id="inputName" className="form-control" placeholder="Your Name" required />
        <br />
      <label for="inputEmail" className="sr-only">Email Address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
        <br />
      <label for="inputEmail" className="sr-only">Confirm Email</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Confirm Email" required />
        <br />
      <label for="inputPassword" className="sr-only">Create Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Create Password" required />
        <br />
    
      <div className="row">
          <div className="col-lg-12 text-left">
            <h5>Please Choose Your Role</h5>
            <hr />
          </div>
      </div>

      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-secondary first">
                <input type="radio" name="options" id="option1" autocomplete="off" checked /> Donator
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off" /> Recipient
              </label>
            </div>
        </div>
      </div>
        <br />
      <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <button className="btn btn-lg btn-secondary btn-block" type="submit">Create New Account</button>
         </div>
      </div>
    </form>
  </div>
);

export default Register;