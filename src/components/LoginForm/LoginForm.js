import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

export class LoginForm extends Component {
  state = {
    username: '',
    password: ''
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

    try {
      const result = await requests.signIn(user);
      addUser(result);
    } catch ({ message }) {
      this.setState({ message });
    }
  }

  render() {
    return (
      <form
        className="LoginForm"
        onSubmit={this.handleLogin}
      >
        <h2>LOGIN</h2>
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
        <button type="submit" className="signin-btn">LOGIN</button>
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
