import React from 'react';
import { Link } from 'react-router-dom';

function Family() {
  return (
    <div>
      <h2>My Family</h2>
      <Link to="/myfamily/registerstudent">Add a Student</Link>
    </div>
  );
}

export default Family;
