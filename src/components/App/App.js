import React from 'react';
import Controls, { useEffect } from '../Controls/Controls';
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Controls />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(addUser(user))
});

export default connect(null, mapDispatchToProps)(App);
