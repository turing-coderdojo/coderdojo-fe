import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../images/CoderDojoColorado.svg';
import { addUser } from '../../actions';

export function Header(props) {
  const logOutUser = () => {
    const { resetUser } = props;
    resetUser();
    localStorage.setItem('token', JSON.stringify(''));
  };

  const createMenuOptions = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    let menuOptions;
    
    if (token) {
      menuOptions = <NavLink to="/" className="nav-link logout" onClick={logOutUser}>LOGOUT</NavLink>;
    } else {
      menuOptions = (
        <div>
          <NavLink to="/login" className="nav-link">LOGIN</NavLink>
          <NavLink className="nav-link" to="/register">REGISTER</NavLink>
        </div>
      );
    }

    return menuOptions;
  };

  return (
    <header>
      <Link to="/" className="logo-a-tag">
        <Logo className="logo" alt="Coder Dojo Colorado Logo" />
      </Link>
      <section>
        <NavLink className="nav-link" to="/">FIND A DOJO</NavLink>
        { createMenuOptions() }
      </section>
    </header>
  );
}

export const mapDispatchToProps = dispatch => ({
  resetUser: () => dispatch(addUser({}))
});

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  resetUser: PropTypes.func
};

Header.defaultProps = {
  resetUser: () => {}
};
