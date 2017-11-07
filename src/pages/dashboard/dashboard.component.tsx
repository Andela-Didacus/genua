import * as React from 'react';

// styles
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../assets/css/font.scss';
import './dashboard.scss';

// components
import { AboutComponent } from '../../components/about/about.component';
import { BodyComponent } from '../../components/body/body.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { TeamComponent } from '../../components/team/team.component';

// common
import { NavbarComponent } from '../../common/navbar/navbar.component';

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
        {/*header and navbar*/}
        <NavbarComponent />

        {/*images slider*/}
        <div id="space"></div>

        <SliderComponent />

        {/*body*/}
        <BodyComponent />

        {/*about us*/}
        <AboutComponent />

        {/*team*/}
        <TeamComponent />

        {/*contacts*/}
        <ContactsComponent />
      </div>
    );
  }
}
