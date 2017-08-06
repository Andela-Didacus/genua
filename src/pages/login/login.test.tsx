import * as React from 'react';

// Testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';

// pages
import { LoginComponent } from './login.component';

const localStorage = '';

describe('<LoginComponent />', () => {
  const wrapper: any = shallow(<LoginComponent />);

  // Test if the landing page renders a Contribute button
  it('renders a login button', () => {
    expect(wrapper.find('#login-button')).to.have.length(1);
  });
});
