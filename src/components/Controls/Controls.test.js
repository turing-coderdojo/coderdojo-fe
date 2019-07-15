import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< Controls /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})