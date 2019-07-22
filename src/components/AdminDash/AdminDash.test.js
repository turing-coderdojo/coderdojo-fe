import React from 'react';
import { shallow } from 'enzyme';
import { AdminDash } from './AdminDash';

describe('AdminDash', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AdminDash />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
