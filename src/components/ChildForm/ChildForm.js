import React, { Component } from 'react';

class ChildForm extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    password2: '',
    dob: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form 
        className="ChildForm"
        onSubmit={this.handleSubmit}>
        <h2>Register a Child</h2>
        <label htmlFor="child-name-input">
          Child's Name
          <input
            type="text"
            id="child-name-input"
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-dob">
          Child's Date of Birth
          <input 
            type="text"
            id="child-dob"
            name="dob"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-username-input">
          Child's Username
          <input
            type="text"
            id="child-username-input"
            name="username"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password-input">
          Child's Password
          <input
            type="text"
            id="child-password-input"
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password2-input">
          Re-Enter Child's Password
          <input
            type="text"
            id="child-password2-input"
            name="password2"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default ChildForm;
