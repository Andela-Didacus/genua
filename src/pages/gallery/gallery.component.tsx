import * as React from 'react';

import ImageGallery from 'react-image-gallery';

// styling
import './gallery.scss';

// components
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';

export class GalleryComponent extends React.Component <{}, {}> {

  public render() {
    return (
        <div>
          <NavbarComponent />
          <br/>
          <span> Gallery </span>
          <br/>
          <div className="gallery">
          </div>
          <ContactsComponent />
        </div>
    );
  }
}
