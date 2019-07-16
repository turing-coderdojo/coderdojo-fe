import React, { Component } from 'react';
import queries from '../../utils/queries/queries';

export class App extends Component {
  state = {
    error: '',
    users: {}
  }

  async componentDidMount() {
    try {
      const users = await queries.getUsers();
      this.setState({ users })
    } catch({ message }) {
      this.setState({ error: message })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CODERDOJO!</h1>
      </div>
    );
  }
}

export default App;
