import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import requests from '../../utils/requests/requests';
import * as actions from '../../actions';
import 'react-datepicker/dist/react-datepicker.css';

export class AgeVerifier extends Component {
  state = {
    birthdate: '',
    success: false
  }

  handleSubmit = (e) => {
    const { fullName, username, password } = this.props;
    const { birthdate } = this.state;

    e.preventDefault();


    const student = {
      username,
      password,
      name: fullName,
      birthdate: birthdate.toDateString()
    };
    const user = {
      username,
      password
    };
    
    this.createStudent(student, user);
  } 

  createStudent = async (student, user) => {
    const { setError } = this.props;
    const result = await requests.createStudent(student);

    if (result) {
      this.signIn(user);
    } else {
      setError('There was an error.');
    }
  }

  signIn = async (user) => {
    const { addUser } = this.props;
    const result = await requests.signIn(user);

    if (result) {
      const { user: validUser, token } = result.signIn;

      localStorage.setItem('token', JSON.stringify(token));
      addUser(validUser);
      this.setState({ success: true });
    }
  }

  handleDate = (date) => {
    const stringedDate = new Date(date);

    this.setState({ birthdate: stringedDate });
  }

  subYears = () => {
    const date = new Date();

    date.setFullYear(date.getFullYear() - 13);

    return date;
  }

  render() {
    const { success, birthdate } = this.state;
    const { isFetching } = this.props;

    if (success) return <Redirect to="/dashboard/student" />;

    return (
      <form className="AgeForm" onSubmit={this.handleSubmit}>
        <h2>Please Verify Your Age</h2>
        <label htmlFor="dob">
          Enter your date of birth
          <DatePicker 
            id="dob"
            onSelect={this.handleDate}
            selected={birthdate}
            showYearDropdown
            dateFormat="MM/dd/yyyy"
            dropdownMode="select"
            scrollableYearDropdown
            maxDate={this.subYears()}
            showMonthDropdown
            useShortMonthInDropdown
            className="date-picker"
          />
        </label>
        <button type="submit" className="signin-btn">
          {isFetching ? 'PLEASE WAIT...' : 'SUBMIT'}
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user)),
  setError: error => dispatch(actions.setError(error))
});

export const mapStateToProps = ({ isFetching, error }) => ({
  error,
  isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(AgeVerifier);

AgeVerifier.propTypes = {
  addUser: PropTypes.func,
  setError: PropTypes.func,
  fullName: PropTypes.string,
  password: PropTypes.string,
  username: PropTypes.string,
  isFetching: PropTypes.bool
};

AgeVerifier.defaultProps = {
  addUser: () => {},
  setError: () => {},
  fullName: '',
  password: '',
  username: '',
  isFetching: false
};
