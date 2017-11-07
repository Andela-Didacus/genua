import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import {EventsComponent} from '../pages/events/events.component';
import {GalleryComponent} from '../pages/gallery/gallery.component';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardComponent} />
        <Route exact path="/gallery" component={GalleryComponent} />
        <Route exact path="/events" component={EventsComponent } />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
