import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requests from '../../utils/requests/requests';
import * as actions from '../../actions';

export class ChildForm extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    password2: '',
    dob: '',
    success: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    const { setError } = this.props;

    e.preventDefault();

    setError('');

    const error1 = this.checkAllFields();
    const error2 = this.checkPasswords();
    
    if (!error1 && !error2) {
      this.registerStudent();
    } 
  }

  registerStudent = async () => {
    const { 
      name, 
      username, 
      password, 
      dob 
    } = this.state;
    const student = {
      name,
      username,
      password,
      birthdate: dob
    };
    const createResult = await requests.createStudent(student);

    if (createResult) {
      this.setState({ success: true });
    }
  }

  checkAllFields() {
    let error = false;
    const { 
      name, 
      username, 
      password, 
      password2, 
      dob 
    } = this.state;
    const fields = [
      name, 
      username, 
      password, 
      password2, 
      dob
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

  checkPasswords() {
    let error = false;
    const { password, password2 } = this.state;
    const { setError } = this.props;

    if (password !== password2) {
      setError('Passwords must match.');

      this.setState({
        password: '',
        password2: ''
      });

      error = true;
    } 

    return error;
  }

  render() {
    const { password, password2, success } = this.state;
    const { error, loading } = this.props;

    if (success) return <Redirect to="/myfamily" />;

    return (
      <form 
        className="ChildForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Register a Student</h2>
        <label htmlFor="child-name-input">
          Student's Full Name
          <input
            type="text"
            id="child-name-input"
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-dob">
          Student's Date of Birth
          <input 
            type="text"
            id="child-dob"
            name="dob"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-username-input">
          Student's Username
          <input
            type="text"
            id="child-username-input"
            name="username"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password-input">
          Student's Password
          <input
            type="password"
            id="child-password-input"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="child-password2-input">
          Re-Enter Student's Password
          <input
            type="password"
            id="child-password2-input"
            name="password2"
            value={password2}
            onChange={this.handleChange}
          />
        </label>
        <div className="error-msg">
          {error && <p className="shake">{error}</p>}
        </div>
        <button type="submit">
          {loading ? 'PLEASE WAIT...' : 'SUBMIT'}
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  loading: state.isFetching
});

export const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(actions.setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildForm);

ChildForm.propTypes = {
  setError: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
};

ChildForm.defaultProps = {
  setError: () => {},
  error: '',
  loading: false
};
