import React, { Component } from 'react';
import { Proptypes } from 'prop-types';
import { connect } from 'react-redux';

export class RegisterForm extends Component {
  state = {
    username: '',
    password:'',
    reEnteredPassword: '',
    fullName:''
  }

  render() {
    return (
      <form>
        <h2>Create Account</h2>
        <label htmlFor="full-name-input">
          Full Name
          <input 
            id="full-name-input"
            type="text" 
            name="fullName"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="username-input">
          <input 
            id="username-input"
            type="text"
            name="username"
            onChange={this.handleChange}
          />
        </label>

      </form>
    );
  }
}

export default RegisterForm;
