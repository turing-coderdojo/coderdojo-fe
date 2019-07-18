import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import ContactForm from '../ContactForm/ContactForm';
import Controls from '../Controls/Controls';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>CODERDOJO!</h1>
        <ContactForm />
        <LoginForm />
        <Controls />
      </div>
    );
  }
}

export default App;
