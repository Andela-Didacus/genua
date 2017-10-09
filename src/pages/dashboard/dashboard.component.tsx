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
    const image = '/lm-back.jpeg';
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
          <div className="navigation">
            <div className="Navbar">
              <div><a>Home </a></div>
              <div><a>About us</a></div>
              <div><a>Events </a></div>
              <div><a>Gallery</a></div>
              <div><a>Contacts</a></div>
            </div>
          </div>
        </div>

        {/*body*/}
        <div className="scroll">
          <div className="body">
            <div className="sections">
              <div className="section2">
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
          <div className="team">
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
          <div className="contacts">
            Contacts
          </div>
          <footer>
            Footer
          </footer>
        </div>
      </div>
    );
  }
}
