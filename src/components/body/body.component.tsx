import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

export class BodyComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div className="body">
        <div className="sections">
          <div className="section2">
            <div className="content">
              <h2>About us</h2>

              <p>The network was formed in Nairobi, Kenya in August 2013 during the Association of Commonwealth
                Universities Centenary celebrations held at the University of Nairobi, Kenya.</p>

              <h3>The elected officials were:</h3>
              <ul>
                <li><p><strong>Chairman/Chairperson:</strong> Prof. Anne Asuquo -Nigeria</p></li>
                <li><p>
                  <strong>Alternate Chair:</strong> Prof Mary Walingo-VC, Maasai Mara, University, Kenya</p></li>
                <li><p><strong>Organizing Secretary:</strong> Dr. Anne Aseey-Kenya</p></li>
                <li><p><strong>Treasurer:</strong> Mrs. Georgina Mundia- Copperstone University, Zambia</p></li>
              </ul>
            </div>
          </div>
          <div className="content3">
            <p><strong>Other Committee Members: </strong></p>
            <ul>
              <li><strong>Prof.  Frances Owusu Daaku </strong> - Kwame Nkuruma University of Science
                and technology, Ghana</li>
              <li><strong>Prof.  Catherine Ndungo </strong> - Kenyatta  University, Kenya</li>
              <li><strong>Prof.  Londiwe  C.Nkiwane </strong>- National University of  Science
                and technology, Zimbabwe</li>
              <li><strong>Prof.  Faith Nguru </strong>- Riara University, Kenya</li>
              <li><strong>Prof.  Freshia Waweru</strong> - Strathmore University, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
