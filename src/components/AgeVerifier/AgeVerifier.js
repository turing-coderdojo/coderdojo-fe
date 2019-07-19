import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class AgeVerifier extends Component {
  state = {
    dob:''
  }

  handleSubmit = (e) => {
    const { dob } = this.state;
  } 

  hanldeDate = (date) => {
    console.log(date);

  }

  render() {
    const { dob } = this.state;
    return (
      <form className="AgeForm" onSubmit={this.handleSubmit}>
        <h2>Please Verify Your Age</h2>
        <label htmlFor="dob">
          Enter your date of birth
          <DatePicker 
            onSelect={this.hanldeDate}
            showYearDropdown
            dropdownMode="select"
            scrollableYearDropdown
            maxDate={new Date()}
          />
        </label>
        <button type="submit" className="signin-btn">Submit</button>
      </form>
    );
  }
}

export default AgeVerifier;