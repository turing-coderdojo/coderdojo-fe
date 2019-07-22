import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';
import * as actions from '../../actions';


export class ContactForm extends Component {
  state = {
    email: '',
    phoneNumber: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    success: false
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    const { fullName, username, password } = this.props;
    const { 
      email, 
      phoneNumber,
      street1,
      street2,
      city,
      state,
      zip 
    } = this.state;

    e.preventDefault();
    const guardian = {
      name: fullName,
      username,
      password,
      phoneNumber,
      email,
      street1,
      street2,
      city,
      state,
      zip
    };
    const user = {
      username,
      password
    };

    this.createGuardian(guardian, user);
  }

  createGuardian = async (guardian, user) => {
    const { error, setError } = this.props;
    const result = await requests.createGuardian(guardian);
    if (result) {
      this.signIn(user);
    } else {
      setError(error);
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

  cleanNumber = () => {
    const { phoneNumber } = this.state;
    const { setError } = this.props;
    let number = phoneNumber.replace(/\D+/g, '');
    if (number.length === 10) {
      number = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else {
      number = '';
      setError('Please enter a valid US phone number.');
    }
    this.setState({ phoneNumber: number });
  }
  
  render() {
    const { success, phoneNumber } = this.state;
    const { error } = this.props;

    if (success) return <Redirect to="/myFamily" />;

    return (

      <form
        className="ContactForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Guardian Details</h2>
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="example@example.com"
          />
        </label>
        <label htmlFor="phoneNumber-input">
          Phone Number:
          <input
            id="phoneNumber-input"
            type="tel"
            name="phoneNumber"
            onChange={this.handleChange}
            maxLength="14"
            contentEditable="true" 
            onBlur={this.cleanNumber}
            value={phoneNumber}
            placeholder="(xxx) xxx-xxxx"
          />
        </label>
  
        <div className="address-section">
          <label htmlFor="street1-input">
            Street 1:
            <input
              id="street1-input"
              type="text"
              name="street1"
              onChange={this.handleChange}
              placeholder="Street 1"
            />
          </label>
          <label htmlFor="street2-input">
            Street 2:
            <input
              id="street2-input"
              type="text"
              name="street2"
              onChange={this.handleChange}
              placeholder="Additional Street Info"
            />
          </label>
          <label htmlFor="city-input">
            City:
            <input
              id="city-input"
              type="text"
              name="city"
              onChange={this.handleChange}
              placeholder="City"
            />
          </label>
          <label htmlFor="state-input">
            State:
            <input
              id="state-input"
              type="text"
              name="state"
              onChange={this.handleChange}
              placeholder="State"
            />
          </label>
          <label htmlFor="zip-input">
            Zip Code:
            <input
              id="zip-input"
              type="text"
              name="zip"
              onChange={this.handleChange}
              maxLength="10"
              placeholder="Zip Code"
            />
          </label>
        </div>
        <p>{error && error}</p>
        <button type="submit" className="signin-btn">Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addUser: PropTypes.func,
  error: PropTypes.string,
  fullName: PropTypes.string,
  password: PropTypes.string,
  username: PropTypes.string,
  isFetching: PropTypes.bool,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  street1: PropTypes.string,
  street2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  success: PropTypes.bool
};

ContactForm.defaultProps = {
  addUser: () => {},
  error: '',
  fullName: '',
  password: '',
  username: '',
  isFetching: false,
  success: false,
  email: '',
  phoneNumber: '',
  street1: '',
  street2: '',
  city: '',
  state: '',
  zip: ''
};
