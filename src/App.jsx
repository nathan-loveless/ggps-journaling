import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';

function App() {
  return (
    <>
      Your rendering
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <PrivateRoute path="/journaling" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
