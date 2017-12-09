import React, { Component } from 'react';
import NewUser from '../components/newuser/NewUser';

import Request from '../agent';


class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    organization: "",
  };

  registerUser = (organization, username, email, password) => {
    let user = {
      organization: organization,
      username: username,
      email: email,
      password: password,
    }
    Request.Auth.register(user)
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
    
    this.registerUser(this.state.organization, this.state.username, this.state.email, this.state.password);
  }
 
  render() {
    return (

      <div className="container">
        <NewUser 
        email={this.state.email}
        password={this.state.password}
        username={this.state.username}
        organization={this.state.organization}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Register;
