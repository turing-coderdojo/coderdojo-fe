import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import requests from '../../utils/requests/requests';
import * as actions from '../../actions';
import 'react-datepicker/dist/react-datepicker.css';

export class AgeVerifier extends Component {
  state = {
    dob: ''
  }

  handleSubmit = async (e) => {
    const { fullName, username, password } = this.props;
    const { dob } = this.state;
    e.preventDefault();
    const student = {
      username,
      password,
      fullName,
      dob
    };

    const results = await this.createStudent(student);
    // this.signIn()
  } 

  createStudent = async (student) => {
    const { addUser } = this.props;
    const result = await requests.createStudent(student);
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
            selected={dob}
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

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
});

export const mapStateToProps = ({ isFetching, error }) => ({
  error,
  isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(AgeVerifier);

