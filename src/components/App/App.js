import React, { Component } from 'react';
import queries from '../../utils/queries/queries';
import LoginForm from '../LoginForm/LoginForm';
import GuardianDetailsForm from '../GuardianDetailsForm/GuardianDetailsForm';

class App extends Component {
  state = {
    error: '',
    users: [],
  }

  async componentDidMount() {
    try {
      const users = await queries.getUsers();

      this.setState({ users: users.allUsers });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }
  
  createUser = async () => {
    const mockUser = {
      email: 'tiff@sum.com',
      nickname: 'ERICCCCCC',
      password: 'asdfasdf'
    };
    
    await queries.newUser(mockUser);
  }

  render() {
    return (
      <div className="App">
        <h1>CODERDOJO!</h1>
        <button type="submit" onClick={this.createUser}>
          CREATE
        </button>
        <GuardianDetailsForm />
        <LoginForm />
      </div>
    );
  }
}

export default App;
