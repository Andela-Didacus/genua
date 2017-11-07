import * as React from 'react';

// styling
import './gallery.scss';

// components
import { NavbarComponent } from '../../common/navbar/navbar.component';

export class GalleryComponent extends React.Component <{}, {}> {
  public render() {
    return (
        <div>
          <NavbarComponent />
          <br/>
          <span> Gallery </span>
          <br/>
        </div>
    );
  }
}
