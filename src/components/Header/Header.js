import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo-black.svg';

export function Header(props) {
  const assignLogin = () => {
    const { user } = props;
    let loginButton;
    if (user.length) {
      loginButton = <NavLink to="/" className="nav-link">LOGOUT</NavLink>;
    } else {
      loginButton = <NavLink to="/login" className="nav-link">LOGIN</NavLink>;
    }

    return loginButton;
  };

  return (
    <header>
      <Link to="/" className="logo-a-tag">
        <Logo className="logo" />
        <h1>Colorado</h1>
      </Link>
      <section>
        <NavLink className="nav-link" to="/">FIND A DOJO</NavLink>
        <NavLink className="nav-link" to="/register">REGISTER</NavLink>
        {assignLogin()}
      </section>
    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Header);
