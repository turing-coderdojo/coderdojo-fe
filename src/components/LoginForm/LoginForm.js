import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
    const { addUser } = this.props;
    const { username, password } = this.state;
    const user = {
      username,
      password
    };

    e.preventDefault();

    addUser(user);
  }

  render() {
    return (
      <form
        className="LoginForm"
        onSubmit={this.handleLogin}
      >
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
        <button type="submit" className="signin-btn">SIGN IN</button>
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
