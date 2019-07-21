import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ContactForm from '../ContactForm/ContactForm';
import AgeVerifier from '../AgeVerifier/AgeVerifier';

export class RegisterForm extends Component {
  state = {
    fullName: '',
    username: '',
    password: '',
    reEnteredPassword: '',
    displayContactForm: false,
    displayAgeForm: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleRegister = (e) => {
    const { name } = e.target;
    const { 
      username, 
      password, 
      fullName, 
      reEnteredPassword 
    } = this.state;
    const { addUser } = this.props;
    const newUser = {
      username,
      password,
      fullName
    };

    e.preventDefault();

    if (name === 'student') {
      this.setState({ displayAgeForm: true });
    } else {
      this.setState({ displayContactForm: true });
    }
  }

  assignContactForm = () => {
    let assignContact;
    const { displayContactForm, displayAgeForm } = this.state;
    
    if (displayContactForm) {
      assignContact = <ContactForm {...this.state} />;
    } else if (displayAgeForm) {
      assignContact = <AgeVerifier {...this.state} />;
    } else {
      assignContact = (
        <form className="RegisterForm" onSubmit={this.handleRegister}>
          <h2>Register an Account</h2>
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
          <label htmlFor="reentered-password-input">
            Re-enter Password
            <input
              id="reentered-password-input"
              type="password"
              name="reEnteredPassword"
              onChange={this.handleChange}
            />
          </label>
          <button type="button" className="signin-btn" value="submit" name="student" onClick={this.handleRegister}>I am a student over 13</button>
          <button type="button" className="signin-btn guardian-btn" name="guardian" onClick={this.handleRegister}>I am a guardian</button>
        </form>
      );
    }
    return assignContact;
  }


  render() { 
    const displayForms = this.assignContactForm();
    return (
      <section>
        {displayForms}
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
});

export default connect(null, mapDispatchToProps)(RegisterForm);

RegisterForm.propTypes = {
  addUser: PropTypes.func
};

RegisterForm.defaultProps = {
  addUser: () => {}
};
