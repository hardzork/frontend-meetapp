import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import New from '../pages/Meetup/New';
import Edit from '../pages/Meetup/Edit';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetups/:id/details" component={Details} isPrivate />
      <Route path="/meetups/:id/edit" component={Edit} isPrivate />
      <Route path="/meetups/new" component={New} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
