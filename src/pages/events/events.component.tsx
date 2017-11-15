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
              <div className="card">
                <span className="event-logo image1"></span>
                <span className="event-title"> Association of Commonwealth Universities (ACU) and the University of
                  Nairobi Conference and Training of (TOT) Workshop - <b>Kenya</b><br/>
                  <p>Date: 1st September 2014 to 5th September 2014</p>
                </span>
                <span></span>
              </div>
              <div className="card">
                <span className="event-logo image2"></span>
                <span className="event-title">International Conference on Gender Mainstreaming at
                  Higher Education Institutions - <b>Zimbabwe</b>
                  <br/>
                  <p>Date: 16th to 17th September 2014</p>
                </span>
                <span></span>
              </div>
            </div>
            <div className="cards horizontal">
              <div className="card">
                <span className="event-logo image3"></span>
                <span className="event-title">
                  Association of Commonwealth Universities Conference - <b>Kenya</b>
                  <br/>
                  <br/>
                  <p>Date: Monday 12 September  2016</p>
                </span>
                <span></span>
              </div>
              <div className="card empty">
                <span className="event-logo image4"></span>
                <span className="event-title"></span>
                <span></span>
              </div>
            </div>
            <div className="cards horizontal">
              <div className="card empty">
                <span className="event-logo image5"></span>
                <span className="event-title"></span>
                <span></span>
              </div>
              <div className="card empty">
                <span className="event-logo image6"></span>
                <span className="event-title"></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="recent">
            <span className="titles">Upcoming Events</span>
            <div className="vertical">
              <div className="card">
                <span className="event-logo image7"></span>
                <span className="event-title">
                  Association of Commonwealth Universities Conference - <b>Kenya</b>
                  <br/>
                  <br/>
                  <p>Date: To be Confirmed</p>
                </span>
                <span></span>
              </div>
              <div className="card empty">
                <span className="event-logo image8"></span>
                <span className="event-title"></span>
                <span></span>
              </div>
              <div className="card empty">
                <span className="event-logo image9"></span>
                <span className="event-title"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
