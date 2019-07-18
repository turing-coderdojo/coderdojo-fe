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
    success: false,
    error: '',
    loading: false
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
    this.setState({ error: '', loading: true });
    
    e.preventDefault();
    this.signIn(user);
  }

  signIn = async (user) => {
    const { addUser } = this.props;

    try {
      const result = await requests.signIn(user);
      const { user: validUser, token } = result.signIn;
      if (token && validUser) {
        localStorage.setItem('token', JSON.stringify(token));
        addUser(validUser);
        this.setState({ success: true, loading: false });
      }
    } catch (error) {
      const { message } = error.graphQLErrors[0];
      this.setState({ error: message, loading: false });
    }    
  }

  render() {
    const { success, error, loading } = this.state;
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
        { loading && <p>Loading...</p>}
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

export default connect(undefined, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  addUser: PropTypes.func
};

LoginForm.defaultProps = {
  addUser: () => {}
};
