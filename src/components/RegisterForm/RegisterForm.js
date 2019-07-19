import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ContactForm from '../ContactForm/ContactForm';

export class RegisterForm extends Component {
  state = {
    fullName: '',
    username: '',
    password: '',
    reEnteredPassword: '',
    displayContactForm: false
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
    let displayContactForm;

    e.preventDefault();

    if (name === 'student') {
      addUser(newUser);
    } else {
      this.setState({ displayContactForm: true });
      displayContactForm = <ContactForm {...this.state} />
    }
    return displayContactForm;
  }

  assignContactForm = () => {
    let assignContact;
    const { displayContactForm } = this.state;
    if (displayContactForm) {
      assignContact = <ContactForm {...this.state} />;
    }
    return assignContact;
  }

  render() { 
    const displayContactForm = this.assignContactForm();
    return (
      <section>
        <form 
          className="RegisterForm"
          onSubmit={this.handleRegister}
        >
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
        {displayContactForm}
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
