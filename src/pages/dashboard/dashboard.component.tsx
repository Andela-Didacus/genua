import * as jwtDecode from 'jwt-decode';
import * as React from 'react';

// styles
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../assets/css/font.scss';
import './dashboard.scss';

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
        <div className="body">
          Body
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
