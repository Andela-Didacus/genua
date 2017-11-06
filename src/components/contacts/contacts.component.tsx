import * as React from 'react';

import '../../pages/dashboard/dashboard.scss';

export class ContactsComponent extends React.Component <{}, {}> {
  public render() {
    return (
      <div className="contacts" id="contacts">
        <div className="contacts-body">
          <p className="contact-title">Contact Information</p>
          <p>WINDSOR HOUSE 3RD FLOOR</p>
          <p>MUINDI MBINGU STREET, NAIROBI, KENYA</p>
          <p>P.O BOX 1903-00100 GPO, NAIROBI, KENYA</p>
          <p>TEL . +254 738 986 980</p>
          <p>EMAIL:genua2013@gmail.com</p>
          <br/>
          <div className="icons">
            <span className="icon facebook"><a></a></span>
            <span className="icon twitter"><a></a></span>
            <span className="icon linkedin"><a></a></span>
            <span className="icon email"><a href="genua2013@gmail.com"></a></span>
          </div>
          <br/>
          <span><strong>Copyright © 2016 <a href="#">genua</a> - Design:
            <a> blotch technologies</a></strong></span>
        </div>
      </div>
    );
  }
}
