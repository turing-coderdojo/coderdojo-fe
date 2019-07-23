import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from '../Splash/Splash';
import LoginForm from '../LoginForm/LoginForm';
import Profile from '../Profile/Profile';
import CurrentStudents from '../CurrentStudents/CurrentStudents';
import ContactInfo from '../ContactInfo/ContactInfo';
import Family from '../Family/Family';
import RegisterForm from '../RegisterForm/RegisterForm';
import VenuesContainer from '../VenuesContainer/VenuesContainer';
import ChildForm from '../ChildForm/ChildForm';
import EventsContainer from '../EventsContainer/EventsContainer';
import AdminDash from '../AdminDash/AdminDash';

function Controls() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/venues" component={VenuesContainer} />
        <Route exact path="/venues/:id/events" component={EventsContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/student/:id" component={Profile} />
        <Route exact path="/dashboard/student" component={Profile} />
        <Route exact path="/dashboard/admin" component={AdminDash} />
        <Route exact path="/students" component={CurrentStudents} />
        <Route exact path="/contact/:id" component={ContactInfo} />
        <Route exact path="/myfamily" component={Family} />
        <Route exact path="/myfamily/registerstudent" component={ChildForm} />
        <Route exact path="/dashboard/student" component={Profile} />
        <Route exact path="/dashboard/admin" component={Profile} />
        <Route exact path="/register" component={RegisterForm} />
        <Route render={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default Controls;
