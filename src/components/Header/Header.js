import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../styles/images/CoderDojo.svg';

function Header() {
  const assignNavLink = () => {

  }

  return (
    <header>
      {logo}

      



    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Header);
