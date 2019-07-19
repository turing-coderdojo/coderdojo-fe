import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from '../Splash/Splash';
import LoginForm from '../LoginForm/LoginForm';
import Profile from '../Profile/Profile';
import CurrentStudents from '../CurrentStudents/CurrentStudents';
import ContactInfo from '../ContactInfo/ContactInfo';
import Family from '../Family/Family';
import RegisterForm from '../RegisterForm/RegisterForm';

function Controls() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/student/:id" component={Profile} />
        <Route exact path="/students" component={CurrentStudents} />
        <Route exact path="/contact/:id" component={ContactInfo} />
        <Route exact path="/myFamily" component={Family} />
        <Route exact path="/register" component={RegisterForm} />
        <Route render={() => <h1>404 Page</h1>} />
      </Switch>
    </div>
  );
}

export default Controls;
