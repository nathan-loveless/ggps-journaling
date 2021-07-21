import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Signup from './components/authentication/pages/Signup';
import Login from './components/authentication/pages/Login';
import Landing from './components/landing/pages/Landing';
import Journal from './components/journal/pages/Journal';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/journal" component={Journal} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
