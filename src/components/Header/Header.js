import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/CoderDojo.svg';

function Header() {
  const assignLogin = () => {
    const { user } = this.props
    const loginButton;
    if ()

    return loginButton;
  }

  return (
    <header>
      {logo}
      <section>
        <NavLink>Dojos</NavLink>
        <NavLink>Login/Register</NavLink>
      </section>
    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Header);
