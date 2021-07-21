import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Signup from './components/authentication/pages/Signup';
import Login from './components/authentication/pages/Login';

import Landing from './components/landing/pages/Landing';

function App(props) {
  return (
    <>
      Your rendering
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/journaling" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
