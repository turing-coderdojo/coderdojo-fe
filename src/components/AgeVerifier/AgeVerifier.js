import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class AgeVerifier extends Component {
  state = {
    dob: ''
  }

  handleSubmit = (e) => {
    
  } 

  hanldeDate = (date) => {
    this.setState({ dob: date });
  }

  subYears = () => {
    const date = new Date();

    date.setFullYear(date.getFullYear() - 13);
    return date;
  }

  render() {
    const { dob } = this.state;
    return (
      <form className="AgeForm" onSubmit={this.handleSubmit}>
        <h2>Please Verify Your Age</h2>
        <label htmlFor="dob">
          Enter your date of birth
          <DatePicker 
            id="dob"
            onSelect={this.hanldeDate}
            showYearDropdown
            dateFormat="yyyy/MM/dd"
            dropdownMode="select"
            scrollableYearDropdown
            maxDate={this.subYears()}
            showMonthDropdown
            useShortMonthInDropdown
            className="date-picker"
          />
        </label>
        <button type="submit" className="signin-btn">Submit</button>
      </form>
    );
  }
}

export default AgeVerifier;