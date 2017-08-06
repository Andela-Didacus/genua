import * as jwtDecode from 'jwt-decode';
import * as React from 'react';

// styles
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../assets/css/font.scss';
import './dashboard.scss';

// pages
import SliderComponent from '../slider/slider.component';

/**
 * Dashboard Component
 *
 * Dashboard for The Learning Map
 */
export class DashboardComponent extends React.Component<any, any> {
  /**
   * Renders Genua page
   *
   * @return {object} JSX for dashboard component
   */
  public render() {
    return (
      <div className="home-container">
        <div id="header">
          <div className="title">
            <div className="logo">
            </div>
            <div className="genua">
              Gender Network for Universities in Africa <br/>
              G.E.N.U.A
            </div>
          </div>
          <div className="Navbar">
            <div><a>Home </a></div>
            <div><a>About us</a></div>
            <div><a>Events </a></div>
            <div><a>Gallery</a></div>
            <div><a>Contacts</a></div>
          </div>
        </div>
        <div className="body">
          <div className="content2">
            <h2>Gender Network for Universities in Africa</h2>
            <p>GENUA works in partnership with other units and organizations
              on issues related to education, gender, training, consultancy and empowerment. </p>
            <br/>
            <div id="btn-events"><a>View Events</a></div>
          </div>
          <div className="content">
            <h2>About us</h2>

              <p>The network was formed in Nairobi, Kenya in August 2013 during the Association of Commonwealth
                Universities Centenary celebrations held at the University of Nairobi, Kenya.</p>

            <h3>The elected officials were:</h3>
            <ul>
              <li><p><strong>Chairman/Chairperson:</strong> Prof. Anne Asuquo -Nigeria</p></li>
              <li><p><strong>Alternate Chair:</strong> Prof Mary Walingo-VC, Maasai Mara, University, Kenya</p></li>
              <li><p><strong>Organizing Secretary:</strong> Dr. Anne Aseey-Kenya</p></li>
              <li><p><strong>Treasurer:</strong> Mrs. Georgina Mundia- Copperstone University, Zambia</p></li>
            </ul>
          </div>
          <div className="content3">
            <p><strong>Other Committee Members: </strong></p>
            <ul>
              <li><strong>Prof.  Frances Owusu Daaku </strong> - Kwame Nkuruma University of Science
                and technology ,Ghana</li>
              <li><strong>Prof.  Catherine Ndungo </strong> - Kenyatta  University  ,Kenya</li>
              <li><strong>Prof.  Londiwe  C.Nkiwane </strong>- National University of  Science
                and technology, Zimbabwe</li>
              <li><strong>Prof.  Faith Nguru </strong>- Riara University, Kenya</li>
              <li><strong>Prof.  Freshia Waweru</strong> - Strathmore University, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="about-us">
          About us
        </div>
        <div className="team">
          Team
        </div>
        <div className="contacts">
          Contacts
        </div>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}
