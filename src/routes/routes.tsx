import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardComponent} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
