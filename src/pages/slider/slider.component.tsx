import * as React from 'react';

import './slider.scss';

export class SliderComponent extends React.Component <{}, {}> {
  public render() {

    const image = '/acu.jpeg';
    return (
        <div id="slider">
          <figure>
            {
              <img src={image}/>
             }
          </figure>
        </div>
    );
  }
}
export default SliderComponent;
