import React from 'react';
import Family from './Family';
import { shallow } from 'enzyme';

describe('Family', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< Family /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})