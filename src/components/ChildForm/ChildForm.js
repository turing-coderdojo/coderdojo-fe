import React, { Component } from 'react';

class ChildForm extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    password2: '',
    dob: '',
    error: '',
    loading: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    
    this.checkAllFields();

    this.checkPasswords();
  }

  checkPasswords() {
    const { password, password2 } = this.state;

    if (password !== password2) {
      this.setState({
        error: 'Passwords must match.',
        password: '',
        password2: ''
      });
    }
  }

  checkAllFields() {
    const { name, username, password, password2, dob } = this.state;
    const fields = [name, username, password, password2, dob];

    for (let field of fields) {
      if (!field) {
        this.setState({ error: 'All fields must be filled.' });
      }
    } 
  }

  render() {
    const { password, password2, error, loading } = this.state;

    return (
      <form 
        className="ChildForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Register a Student</h2>
        <label htmlFor="child-name-input">
          Student's Full Name
          <input
            type="text"
            id="child-name-input"
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-dob">
          Student's Date of Birth
          <input 
            type="text"
            id="child-dob"
            name="dob"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-username-input">
          Student's Username
          <input
            type="text"
            id="child-username-input"
            name="username"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password-input">
          Student's Password
          <input
            type="password"
            id="child-password-input"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password2-input">
          Re-Enter Student's Password
          <input
            type="password"
            id="child-password2-input"
            name="password2"
            value={password2}
            onChange={this.handleChange}
          />
        </label>
        <p className="error-msg">{error && error}</p>
        <button type="submit">
          {loading ? 'Please wait...' : 'Submit'}
        </button>
      </form>
    );
  }
}

export default ChildForm;
