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
    e.preventDefault();

    const { name } = e.target;
    const { setError } = this.props;

    setError('');

    const error1 = this.checkAllFields();
    const error2 = this.checkPasswords();

    if (name === 'student' && !error1 && !error2) {
      this.setState({ displayAgeForm: true });
    } else if (!error1 && !error2) {
      this.setState({ displayContactForm: true });
    }
  }

  assignContactForm = () => {
    let assignContact;
    const { displayContactForm, displayAgeForm } = this.state;
    const { error } = this.props;

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
          <div className="error-msg">
            {error && <p className="shake">{error}</p>}
          </div>
          <button type="button" className="signin-btn" value="submit" name="student" onClick={this.handleRegister}>I am a student over 13</button>
          <button type="button" className="signin-btn guardian-btn" name="guardian" onClick={this.handleRegister}>I am a guardian</button>
        </form>
      );
    }
    return assignContact;
  }

  checkPasswords = () => {
    let error = false;
    const { password, reEnteredPassword } = this.state;
    const { setError } = this.props;

    if (password !== reEnteredPassword) {
      setError('Passwords must match.');

      this.setState({
        password: '',
        reEnteredPassword: ''
      });

      error = true;
    }

    return error;
  }

  checkAllFields() {
    let error = false;
    const {
      fullName,
      username,
      password,
      reEnteredPassword
    } = this.state;
    const fields = [
      fullName,
      username,
      password,
      reEnteredPassword
    ];
    const { setError } = this.props;

    fields.forEach((field) => {
      if (!field) {
        setError('All fields must be filled.');
        error = true;
      }
    });

    return error;
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

export const mapStateToProps = state => ({
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user)),
  setError: error => dispatch(actions.setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

RegisterForm.propTypes = {
  addUser: PropTypes.func,
  setError: PropTypes.func,
  error: PropTypes.bool
};

RegisterForm.defaultProps = {
  addUser: () => {},
  setError: () => {},
  error: ''
};
