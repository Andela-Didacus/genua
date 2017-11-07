import * as React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import '../../pages/dashboard/dashboard.scss';

export class NavbarComponent extends React.Component <{}, {}> {
  public render() {
    return (
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
            <div><Link to="/"> Home</Link></div>
            <div><Link to="/events"> Events </Link></div>
            <div><Link to="/gallery"> Gallery </Link></div>
            <div><a href="#contacts">Contacts</a></div>
          </div>
        </div>
      </div>
    );
  }
}
