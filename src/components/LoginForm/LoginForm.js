import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form 
        className="LoginForm" 
        onSubmit={this.handleLogin}>
        <label htmlFor="username-input">Username:</label>
        <input 
          id="username-input"
          type="text"
          name="username"
          onChange={this.handleChange} />
        <label htmlFor="password-input">Password:</label>
        <input 
          id="password-input"
          type="password"
          name="password"
          onChange={this.handleChange} />
        <button className="signin-btn">SIGN IN</button>
      </form>
    );
  }
}

export default LoginForm;
