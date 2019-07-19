import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../images/logo-black.svg';
import { addUser } from '../../actions';

export function Header(props) {
  const logOutUser = () => {
    const { resetUser } = props;
    resetUser();
  };

  const createMenuOptions = () => {
    const { user } = props;
    let menuOptions;
    
    if (user.username) {
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
        <Logo className="logo" />
        <h1>Colorado</h1>
      </Link>
      <section>
        <NavLink className="nav-link" to="/">FIND A DOJO</NavLink>
        { createMenuOptions() }
      </section>
    </header>
  );
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => ({
  resetUser: () => dispatch(addUser({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  user: PropTypes.object,
  resetUser: PropTypes.func
};

Header.defaultProps = {
  user: {},
  resetUser: () => {}
};
