import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Controls from '../Controls/Controls';
import requests from '../../utils/requests/requests';
import { addUser } from '../../actions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function App(props) {
  const { setUser } = props;

  const setUserData = async () => {
    const userInfo = await requests.getUserByToken();
    if (userInfo) setUser(userInfo.me || {});
  };

  useEffect(() => {
    setUserData();
  }, [])

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
