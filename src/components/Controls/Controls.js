import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Profile from '../Profile/Profile';
import CurrentStudents from '../CurrentStudents/CurrentStudents';
import ContactInfo from '../ContactInfo/ContactInfo';
import Family from '../Family/Family';
import RegisterForm from '../RegisterForm/RegisterForm';

function Controls() {
  return (
    <div>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/student/:id" component={Profile} />
      <Route exact path="/students" component={CurrentStudents} />
      <Route exact path="/contact/:id" component={ContactInfo} />
      <Route exact path="/myFamily" component={Family} />
      <Route exact path="/register" component={RegisterForm} />
    </div>
  );
}

export default Controls;
