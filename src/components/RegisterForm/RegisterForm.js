import React, { Component } from 'react';
import { Proptypes } from 'prop-types';
import { connect } from 'react-redux';

export class RegisterForm extends Component {
  state = {
    fullName:'',
    username: '',
    password:'',
    reEnteredPassword: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
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
          Username
          <input 
            id="username-input"
            type="text"
            name="username"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input 
            id="password-input"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="reentered-password">
          Re-enter Password
          <input 
            id="reentered-password"
            type="password"
            name="reEnteredPassword"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">I am a student over 13</button>
        <button type="submit">I am a guardian</button>
      </form>
    );
  }
}

export default RegisterForm;
