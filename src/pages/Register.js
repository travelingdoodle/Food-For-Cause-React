import React, { Component } from 'react';
import NewUser from '../components/newuser/NewUser';

import Request from '../agent';

import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOAD,
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.changeOrganization = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
  }
}

render () {

  const email = this.props.email;
  const password = this.props.email;
  const username = this.props.username;
  const organization = this.props.organization;
  return (

  <div className="container">
    <NewUser />
  </div>)
);
};

export default Register;
