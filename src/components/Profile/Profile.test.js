import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< Profile /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})