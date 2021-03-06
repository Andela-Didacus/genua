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
            <div><a href="#space"> Home</a></div>
            <div><a href="#events"> Events </a></div>
            <div><a href="#space"> Gallery </a></div>
            <div><a href="#contacts">Contacts</a></div>
          </div>
        </div>
      </div>
    );
  }
}
