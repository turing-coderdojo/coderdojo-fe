import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../images/CoderDojoColorado.svg';
import { addUser } from '../../actions';

export function Header(props) {
  const { user } = props;
  const logOutUser = () => {
    const { resetUser } = props;
    resetUser();
    localStorage.setItem('token', JSON.stringify(''));
  };

  const redirectPath = () => {
    const { role } = user;
    let route;
    if (role === 0) {
      route = '/dashboard/student';
    } else if (role === 1) {
      route = '/myfamily';
    } else if (role === 2) {
      route = '/dashboard/admin';
    }
    return route;
  };


  const createMenuOptions = () => {
    let menuOptions;
    if (user.username) {
      menuOptions = (
        <div>
          <NavLink to={redirectPath()} className="nav-link">DASHBOARD</NavLink>
          <NavLink to="/" className="nav-link logout" onClick={logOutUser}>LOGOUT</NavLink>
        </div>
      );
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

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  resetUser: PropTypes.func,
  user: PropTypes.object
};

Header.defaultProps = {
  resetUser: () => {},
  user: {}
};
