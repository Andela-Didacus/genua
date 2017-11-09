import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

import './events.scss';

import { NavbarComponent } from '../../common/navbar/navbar.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';

export class EventsComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div>
        <div className="events" id="events">
          <div className="all-events">
            <span className="titles">G.E.N.U.A Events</span>
            <div className="cards horizontal">
              <div className="card"></div>
              <div className="card"></div>
            </div>
            <div className="cards horizontal">
              <div className="card"></div>
              <div className="card"></div>
            </div>
            <div className="cards horizontal">
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
          <div className="recent">
            <span className="titles">Upcoming Events</span>
            <div className="vertical">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
