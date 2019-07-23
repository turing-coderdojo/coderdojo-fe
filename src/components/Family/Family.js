import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requests from '../../utils/requests/requests';

class Family extends Component {
  async componentDidMount() {
    const response = await requests.getFamily();


    console.log('result:', response.me.students)
  }

  render() {
    return (
      <div>
        <h2>My Family</h2>
        <Link to="/myfamily/registerstudent">Add a Student</Link>
      </div>
    );
  }
}

export default Family;
