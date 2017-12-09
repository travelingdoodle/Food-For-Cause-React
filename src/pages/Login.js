import React, { Component } from "react";
import Auth from "../components/auth/Auth";
import Request from "../agent.js";

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  login(email, password) {
    Request.Auth.login(email, password)
      .then(function(jwt){
        console.log(jwt);
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }
}

export default Login;
