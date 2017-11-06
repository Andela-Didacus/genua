import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

export class SliderComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div className="images-slider">
        <div className="content2">
          <h2>Gender Network for Universities in Africa</h2>
          <p>GENUA works in partnership with other units and organizations
            on issues related to education, gender, training, consultancy and empowerment. </p>
          <br/>
          <div id="btn-events"><a>View Events</a></div>
        </div>
      </div>
    );
  }
}
