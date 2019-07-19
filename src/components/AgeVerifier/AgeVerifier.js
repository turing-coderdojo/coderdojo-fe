import React, { Component } from 'react';

export class AgeVerifier extends Component {
  state = {
    dob:''
  }

  handleSubmit = (e) => {
    const { dob } = this.state;
  } 
  
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="AgeForm" onSubmit={this.handleSubmit}>
        <h2>Please Verify Your Age</h2>
        <label htmlFor="dob">
          Enter your date of birth
          <input type="text" id="dob" name="dob" onChange={this.handleChange}/>
        </label>
        <button type="submit" className="signin-btn">Submit</button>
      </form>
    );
  }
}

export default AgeVerifier;