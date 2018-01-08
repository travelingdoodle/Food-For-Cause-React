import React, { Component } from "react";
import Auth from "../components/auth/Auth";
import Request from "../agent.js";

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  loginUser = (email, password) => {
    // let user = {
    //   email: email,
    //   password: password,
    // }
    Request.Auth.login(email, password)
      .then(function(jwt){
        console.log(jwt);
      })
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loginUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="container">
        <Auth 
        email={this.state.email}
        password={this.state.password}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Login;
