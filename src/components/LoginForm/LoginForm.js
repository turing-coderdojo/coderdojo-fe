import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

export class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    success: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleLogin = (e) => {
    const { username, password } = this.state;
    const user = {
      username,
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
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { error, isFetching } = this.props;

    if (success) return <Redirect to="/" />;

    return (
      <form
        className="LoginForm"
        onSubmit={this.handleLogin}
      >
        <h2>Login</h2>
        <label htmlFor="username-input">
          Username:
          <input
            id="username-input"
            type="text"
            name="username"
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
        { error && <p className="error-msg">{ error }</p>}
        { isFetching && <p>Logging in, please wait...</p>}
        <button type="submit" className="signin-btn">LOGIN</button>
        <p className="register-link">
          Don&#39;t have an account?&nbsp;&nbsp;
          <Link to="/register"><span>Register Here</span></Link>
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
