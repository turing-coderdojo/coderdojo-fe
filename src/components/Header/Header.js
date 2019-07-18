import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo-black.svg';

function Header(props) {
  const assignLogin = () => {
    const { user } = props;
    let loginButton;
    if (user.length) {
      loginButton = <NavLink to="/" className="nav-link">Sign Out </NavLink>;
    } else {
      loginButton = <NavLink to="/login" className="nav-link">Login/Register</NavLink>;
    }

    return loginButton;
  };

  return (
    <header>
      <Logo className="logo" />
      <section>
        <NavLink className="nav-link" to="/">Dojos</NavLink>
        {assignLogin()}
      </section>
    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Header);
