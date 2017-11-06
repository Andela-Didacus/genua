import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

export class AboutComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div className="about-us">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To identify  new opportunities that will be of benefit to all genders.</p>
          <p>To engage  faculty, staff and students in international opportunities
            to promote capacity building and knowledge transfer,
            and to contribute to their learning and
            understanding of global issues.</p>
          <p>To manage  and develop proposals for submission to funding agencies.</p>
          <p>To provide  and train on sound leadership expertise.</p>
          <p>To  ensure GENUA involvement in projects which are ethically sound,
            gender inclusive and environmentally sustainable. </p>
          <p>To develop  opportunities to enhance teaching, research and community service.</p>
          <p><strong>The purpose of the network was as follows:</strong></p>
          <ul>
            <li>To form a network of women around Africa and beyond
              who will rely on each other to  advance their ambition.</li>
            <li>For  collaboration and Partnership.</li>
            <li>To  carry out research together in issues that is of relevance to the society.</li>
            <li>Hold  workshops and conferences.</li>
            <li>Start  journals for publishing academic work.</li>
            <li>Start  a gender magazine.</li>
            <li>To  form linkages and networks with other relevant
              organizations and bodies for  fundraising purposes in gender and higher education</li>
            <li>To  engage in mentorship and career Guidance.</li>
            <li>Guidance counseling and counseling services.</li>
          </ul>
        </div>
        <div className="image">
        </div>
      </div>
    );
  }
}
