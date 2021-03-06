import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

export class LoginForm extends Component {
  state = {
    usernameOrEmail: '',
    password: '',
    success: false,
    role: null
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleLogin = (e) => {
    const { usernameOrEmail, password } = this.state;
    const user = {
      nameOrEmail: usernameOrEmail,
      password
    };
    e.preventDefault();

    this.signIn(user);
  }

  signIn = async (user) => {
    const { addUser } = this.props;
    const result = await requests.signIn(user);

    if (result) {
      const { user: validUser, token } = result.signIn;
      
      localStorage.setItem('token', JSON.stringify(token));
      
      addUser(validUser);

      this.setState({ success: true, role: validUser.role });
    }
  }

  render() {
    const { success, role } = this.state;
    const { error, isFetching } = this.props;
    let path;
    
    if (role === 0) {
      path = '/dashboard/student';
    } else if (role === 1) {
      path = '/myfamily';
    } else {
      path = '/dashboard/admin';
    }

    if (success) return <Redirect to={path} />;

    return (
      <form
        className="LoginForm"
        onSubmit={this.handleLogin}
      >
        <h2>Login</h2>
        <label htmlFor="usernameOrEmail-input">
          Email/Username:
          <input
            id="usernameOrEmail-input"
            type="text"
            name="usernameOrEmail"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            id="password-input"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <div className="error-msg">
          {error && <p className="shake">{error}</p>}
        </div>
        <button
          type="submit" 
          className="signin-btn"
        >
          {isFetching ? 'PLEASE WAIT...' : 'LOGIN'}
        </button>
        <p className="register-link">
          Don&apos;t have an account?
          <Link to="/register"><span> Register Here</span></Link>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  addUser: PropTypes.func,
  error: PropTypes.string,
  isFetching: PropTypes.bool
};

LoginForm.defaultProps = {
  addUser: () => {},
  error: '',
  isFetching: false
};
