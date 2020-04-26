import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import Dashboard from './Components/Dashboard/Dashboard'

export default function App() {
  return (
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
