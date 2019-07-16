import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
