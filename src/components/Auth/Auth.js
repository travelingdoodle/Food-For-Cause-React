import React from "react";
import "./Auth.css";


const Login = () => (
    <div className="container"> 
    <form className="form-signin">
      <h2 className="form-signin-heading text-center">Log in</h2>
      <label for="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-secondary btn-block" type="submit">Log in</button>
    </form>
    <div id="create"className="text-center">
        <p>First time? <a href="register.html">Create an account</a></p>
    </div>
  </div>
);

export default Login;
