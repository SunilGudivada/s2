import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import Dashboard from './Components/Dashboard/Dashboard'

export default function App() {
  return (
      <React.Fragment>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/standardization' component={Dashboard} />
          <Route exact path='/rules/1' component={Dashboard} />
          <Route exact path='/rules/2' component={Dashboard} />
          <Route exact path='/execution' component={Dashboard} />
          <Route exact path='/reviewMatches' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}
