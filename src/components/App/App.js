import React, { Component } from 'react';
import queries from '../../utils/queries/queries';
import LoginForm from '../LoginForm/LoginForm';
import Controls from '../Controls/Controls';

class App extends Component {
  state = {
    error: '',
    users: [] 
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
      nickname: 'ERIKKKKK',
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
        <LoginForm />
        <Controls />
      </div>
    );
  }
}

export default App;
