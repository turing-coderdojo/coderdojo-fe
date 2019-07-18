import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/CoderDojo.svg';

function Header(props) {
  const assignLogin = () => {
    const { user } = props;
    let loginButton;
    if (user) {
      loginButton = <NavLink to="/">Sign Out </NavLink>;
    } else {
      loginButton = <NavLink to="/login">Login/Register</NavLink>;
    }

    return loginButton;
  };

  return (
    <header>
      {logo}
      <section>
        <NavLink>Dojos</NavLink>
        {assignLogin()}
      </section>
    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Header);
