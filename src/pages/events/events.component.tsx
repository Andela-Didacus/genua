import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

import { NavbarComponent } from '../../common/navbar/navbar.component';

export class EventsComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    );
  }
}
