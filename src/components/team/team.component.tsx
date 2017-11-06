import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

export class TeamComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div className="team">
        <div className="top">Our Top Officials</div>
        <div className="team-display">
          <div className="person-tag">
            <div className="person-image one"></div>
            <div className="person-info">
              <span><strong>Prof. Anne Asuquo</strong></span>
              <br/>
              <span>Chairperson</span>
              <br/>
              <span>University of Calabar</span>
              <br/>
              <span>Nigeria</span>
            </div>
          </div>
          <div className="person-tag">
            <div className="person-image two"></div>
            <div className="person-info">
              <span><strong>Dr. Anne Achieng Aseey</strong></span>
              <br/>
              <span>Organising Secretary</span>
              <br/>
              <span>University of Nairobi</span>
              <br/>
              <span>Kenya</span>
            </div>
          </div>
          <div className="person-tag">
            <div className="person-image one"></div>
            <div className="person-info">
              <span><strong>Prof. Mary Walingo</strong></span>
              <br/>
              <span>Alternate Chair</span>
              <br/>
              <span>Maasai Mara University</span>
              <br/>
              <span>Kenya</span>
            </div>
          </div>
          <div className="person-tag">
            <div className="person-image one"></div>
            <div className="person-info">
              <span><strong>Mrs. Georgina Mundia</strong></span>
              <br/>
              <span>Treasurer</span>
              <br/>
              <span>Copperstone University</span>
              <br/>
              <span>Zambia</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
