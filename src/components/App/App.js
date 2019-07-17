import React, { Component } from 'react';
import queries from '../../utils/queries/queries';
import { LoginForm } from '../LoginForm/LoginForm';
import GuardianDetailsForm from '../GuardianDetailsForm/GuardianDetailsForm';

class App extends Component {
  state = {
    error: '',
    users: [],
    guardianDetails: {}
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

  handleGuardianDetails = (type, value) => {
    const { guardianDetails } = this.state;
    guardianDetails[type] = value;
    this.setState({ guardianDetails });
  }

  submitGuardianDetails = (e) => {
    console.log(this.state.guardianDetails);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>CODERDOJO!</h1>
        <button type="submit" onClick={this.createUser}>
          CREATE
        </button>
        <GuardianDetailsForm
          handleSubmit={this.submitGuardianDetails}
          handleChange={this.handleGuardianDetails}
        />
      </div>
    );
  }
}

export default App;
