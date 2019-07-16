import React, { Component } from 'react';
import queries from '../../utils/queries/queries';

export class App extends Component {
  state = {
    error: '',
    users: [],
    newUserId: 0,
  }

  async componentDidMount() {
    try {
      const users = await queries.getUsers();
      this.setState({ users: users.allUsers })
    } catch({ message }) {
      this.setState({ error: message })
    }
  }
  
  async createUser() {
    const mockUser = {
      email: "tiff@sum.com",
      nickname: "ERICCCCCC",
      password: "asdfasdf",
    }
    const newUser = await queries.newUser(mockUser);
  }

  render() {
    return (
      <div className="App">
        <h1>CODERDOJO!</h1>
        <button onClick={this.createUser}>
          CREATE
        </button>
      </div>
    );
  }
}

export default App;
