import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requests from '../../utils/requests/requests';
import { addUser } from '../../actions';
import Controls from '../Controls/Controls';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function App(props) {
  const { setUser } = props;

  useEffect(() => {
    const setUserData = async () => {
      const userInfo = await requests.getUserByToken();
      if (userInfo) setUser(userInfo.me || {});
    };

    setUserData();
  }, [setUser]);

  return (
    <div className="App">
      <Header />
      <Controls />
      <Footer />
    </div>
  );
}

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(addUser(user))
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  setUser: PropTypes.func
};

App.defaultProps = {
  setUser: () => {}
};
